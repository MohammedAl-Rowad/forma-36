const {
  getComponentLocalName,
  changeImport,
  getProperty,
  createComponent,
  addImport,
  renameProperties,
  removeComponentImport,
  changeComponentName,
  changeProperties,
  updatePropertyValue,
  updateTernaryValues,
} = require('../utils');
const { getFormaImport, shouldSkipUpdateImport } = require('../utils/config');
const { pipe } = require('./common/pipe');

function selectCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'Select',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = changeProperties(j, source, {
    componentName,
    fn(attributes) {
      let modifiedAttributes = attributes;

      modifiedAttributes = renameProperties(modifiedAttributes, {
        renameMap: {
          required: 'isRequired',
          hasError: 'isInvalid',
          width: 'size',
        },
      });

      modifiedAttributes = updatePropertyValue(modifiedAttributes, {
        propertyName: 'size',
        propertyValue: (value) => {
          const valueMap = {
            auto: 'medium',
            small: 'small',
            medium: 'medium',
            large: 'medium',
            full: 'medium',
          };
          if (value.value !== undefined) {
            return j.literal(valueMap[value.value]);
          }

          return updateTernaryValues(value, { j, valueMap });
        },
      });

      return modifiedAttributes;
    },
  });

  source = changeComponentName(j, source, {
    componentName: 'Option',
    outputComponentName: 'Select.Option',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'Option',
      importName: getFormaImport(),
    });
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Select',
    });
  }

  return source;
}

function selectFieldCodemod(file, api) {
  const j = api.jscodeshift;
  let source = file.source;

  const componentName = getComponentLocalName(j, source, {
    componentName: 'SelectField',
    importName: getFormaImport(),
  });

  if (!componentName) {
    return source;
  }

  source = j(source)
    .find(j.JSXElement, { openingElement: { name: { name: componentName } } })
    .forEach((p) => {
      const options = p.value.children;
      let attributes = p.value.openingElement.attributes;

      attributes = renameProperties(attributes, {
        renameMap: {
          required: 'isRequired',
        },
      });

      const id = getProperty(attributes, { propertyName: 'id' });
      const name = getProperty(attributes, { propertyName: 'name' });
      const labelText = getProperty(attributes, { propertyName: 'labelText' });
      const helpText = getProperty(attributes, { propertyName: 'helpText' });
      const value = getProperty(attributes, { propertyName: 'value' });
      const validationMessage = getProperty(attributes, {
        propertyName: 'validationMessage',
      });
      const required = getProperty(attributes, { propertyName: 'isRequired' });
      const handlerProps = attributes.filter((attribute) =>
        ['onChange', 'onBlur'].includes(attribute.name?.name),
      );
      const commonProps = attributes.filter((attributes) =>
        ['testId', 'className'].includes(attributes.name?.name),
      );

      const Label = createComponent({
        j,
        componentName: 'FormControl.Label',
        children: [j.jsxText(labelText.value.value)],
      });

      const HelpText =
        helpText &&
        createComponent({
          j,
          componentName: 'FormControl.HelpText',
          children: [j.jsxText(helpText.value.value)],
        });

      const ValidationMesage =
        validationMessage &&
        createComponent({
          j,
          componentName: 'FormControl.ValidationMessage',
          children: [j.jsxText(validationMessage.value.value)],
        });

      const selectProps = [value, ...handlerProps].filter((prop) => prop);
      const Select = createComponent({
        j,
        componentName: 'Select',
        props: selectProps,
        children: options,
      });

      const content = [Label, Select, HelpText, ValidationMesage].reduce(
        (acc, c) => {
          return c ? [...acc, c, j.jsxText('\n')] : acc;
        },
        [j.jsxText('\n')],
      );

      const formControlProps = [id, name, required, ...commonProps].filter(
        (p) => p,
      );
      const FormControl = createComponent({
        j,
        componentName: 'FormControl',
        props: formControlProps,
        children: content,
      });

      j(p).replaceWith(FormControl);
    })
    .toSource();

  source = changeComponentName(j, source, {
    componentName: 'Option',
    outputComponentName: 'Select.Option',
  });

  if (!shouldSkipUpdateImport()) {
    source = removeComponentImport(j, source, {
      componentName: 'Option',
      importName: getFormaImport(),
    });
    source = addImport(j, source, [
      j.template.statement([
        'import { FormControl, Select } from "@contentful/f36-components"',
      ]),
    ]).source;
    source = changeImport(j, source, {
      componentName,
      from: getFormaImport(),
      to: '@contentful/f36-components',
      outputComponentName: 'Select',
    });
  }

  return source;
}

module.exports = pipe([selectCodemod, selectFieldCodemod]);
