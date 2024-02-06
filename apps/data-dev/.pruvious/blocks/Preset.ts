import { blockField, blockFieldTrap, blockSubfield, buttonGroupField, buttonGroupFieldTrap, buttonGroupSubfield, checkboxField, checkboxFieldTrap, checkboxSubfield, checkboxesField, checkboxesFieldTrap, checkboxesSubfield, chipsField, chipsFieldTrap, chipsSubfield, dateField, dateFieldTrap, dateRangeField, dateRangeFieldTrap, dateRangeSubfield, dateSubfield, dateTimeField, dateTimeFieldTrap, dateTimeRangeField, dateTimeRangeFieldTrap, dateTimeRangeSubfield, dateTimeSubfield, defineBlock, editorField, editorFieldTrap, editorSubfield, fileField, fileFieldTrap, fileSubfield, iconField, iconFieldTrap, iconSubfield, imageField, imageFieldTrap, imageSubfield, linkField, linkFieldTrap, linkSubfield, numberField, numberFieldTrap, numberSubfield, rangeField, rangeFieldTrap, rangeSubfield, recordField, recordFieldTrap, recordSubfield, recordsField, recordsFieldTrap, recordsSubfield, repeaterField, repeaterFieldTrap, repeaterSubfield, selectField, selectFieldTrap, selectSubfield, sizeField, sizeFieldTrap, sizeSubfield, sliderField, sliderFieldTrap, sliderRangeField, sliderRangeFieldTrap, sliderRangeSubfield, sliderSubfield, switchField, switchFieldTrap, switchSubfield, textAreaField, textAreaFieldTrap, textAreaSubfield, textField, textFieldTrap, textSubfield, timeField, timeFieldTrap, timeRangeField, timeRangeFieldTrap, timeRangeSubfield, timeSubfield, type BlockDefinition } from '#pruvious'
export const __defineBlock = ({
  description: 'This block is swapped with blocks from the selected preset.'
});
export const __defineProps = ({
  preset: recordFieldTrap({
    collection: 'presets',
    fields: {
      blocks: true
    },
    populate: true,
    required: true,
    label: 'Preset',
    description: 'This block is swapped with blocks from the selected preset.',
    placeholder: 'Select a preset'
  })
});
const __defineBlockFields = (__defineBlock as any)['fields'] || {}
const __definePropsFields = Object.fromEntries(Object.entries(__defineProps).filter(([_, prop]) => (prop as any).__fromDefineProps))
const __export = {
  name: 'Preset',
  label: (__defineBlock as any).label || 'Preset',
  fields: { ...__defineBlockFields, ...__definePropsFields },
  slots: (__defineBlock as any).slots ?? {},
  description: (__defineBlock as any).description || '',
  icon: (__defineBlock as any).icon || 'Components',
}
export default __export as unknown as Required<BlockDefinition>
