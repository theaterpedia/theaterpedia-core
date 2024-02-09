import 'h3'
import type { PropType } from 'vue'

export type AuthUser = Omit<PopulatedFieldType['users'], 'password'>

export type SupportedLanguage = 'en'
export type PrimaryLanguage = 'en'

export const supportedLanguages: SupportedLanguage[] = ['en']
export const primaryLanguage = 'en'
export const prefixPrimaryLanguage = false

export const languageLabels: { name: string, code: SupportedLanguage }[] = [{ name: 'English', code: 'en' }]

declare module 'h3' {
  interface H3EventContext {
    auth: { isLoggedIn: true, user: AuthUser } | { isLoggedIn: false, user: null }
    language: SupportedLanguage
  }
}

import type { Booleanish } from '../../../node_modules/pruvious/dist/runtime/utility-types'

export * from '../../../node_modules/pruvious/dist/runtime/utility-types'
export * from '../../../node_modules/pruvious/dist/runtime/utils/array'
export * from '../../../node_modules/pruvious/dist/runtime/utils/common'
export * from '../../../node_modules/pruvious/dist/runtime/utils/conditional-logic'
export * from '../../../node_modules/pruvious/dist/runtime/utils/dom'
export * from '../../../node_modules/pruvious/dist/runtime/utils/function'
export * from '../../../node_modules/pruvious/dist/runtime/utils/number'
export * from '../../../node_modules/pruvious/dist/runtime/utils/object'
export * from '../../../node_modules/pruvious/dist/runtime/utils/query-string'
export * from '../../../node_modules/pruvious/dist/runtime/utils/slugify'
export * from '../../../node_modules/pruvious/dist/runtime/utils/string'
export * from '../../../node_modules/pruvious/dist/runtime/utils/translatable-strings'
export * from '../../../node_modules/pruvious/dist/runtime/utils/typescript'
export * from '../../../node_modules/pruvious/dist/runtime/utils/uploads'
export * from '../../../node_modules/pruvious/dist/runtime/utils/users'

export type UserCapability = 'access-dashboard' | 'clear-cache' | 'update-profile' | CollectionCapability

import { defineTranslatableStrings } from '../../../node_modules/pruvious/dist/runtime/translatable-strings/translatable-strings.definition'
export { defineTranslatableStrings }

export type TranslatableStringsDomain = 'default' | 'pruvious-dashboard' | 'pruvious-server'

export type PublicTranslatableStringsDomain = 'default' | 'pruvious-dashboard'

export interface TranslatableStringsTextKey {
  'pruvious-dashboard': '$add after' | '$add before' | '$count $errors found' | '$item created' | '$item deleted' | '$item duplicated' | '$item link' | '$item updated' | '$timezone time' | '(current)' | '**301** - Moved permanently' | '**302** - Temporarily moved' | '**Allowed types:** $types' | '**Minimum height:** $height' | '**Minimum width:** $width' | 'A file with the name !!$name!! already exists in the destination folder' | 'A folder with this name already exists' | 'A string to append to the URL or path (e.g. **#anchor** or **?query**).' | 'Active' | 'Add' | 'Add $item' | 'Add block' | 'Add block after' | 'Add block before' | 'Add filter' | 'Add inner block' | 'Add link' | 'Add new folder' | 'All fields have been reset to their default values' | 'Alt text' | 'Append' | 'Apply' | 'At least one column must be selected' | 'Block' | 'Block formats' | 'Blocks' | 'Cache cleared successfully' | 'Cancel' | 'Change' | 'Change icon' | 'Changes that you made may not be saved.' | 'Choose $item' | 'Clear' | 'Clear cache' | 'Clear filters' | 'Clear selection' | 'Click to dismiss' | 'Close' | 'Confirm to !!delete!!' | 'Confirm to **move** the selected $selection to **$directory**' | 'Contains (case-insensitive)' | 'Content copied' | 'Continue' | 'Convert block to preset' | 'Convert to preset' | 'Coordinated Universal Time (UTC)' | 'Copied' | 'Copy' | 'Copy link to clipboard' | 'Create' | 'Create account' | 'Create new $item' | 'Create translation' | 'Custom target' | 'Cut' | 'Dashboard' | 'Delete' | 'Delete $count $items' | 'Deleted $count $items' | 'Description' | 'Deselect' | 'Deselect $item' | 'Desynchronize values' | 'Detach preset' | 'Determines the user\'s login access to the CMS.' | 'Disable selection' | 'Do you want to select all $count $items?' | 'Does not contain (case-insensitive)' | 'Draft URL' | 'Drop files here to upload' | 'Duplicate' | 'Edit' | 'Edit $item' | 'Edit alt text' | 'Edit columns' | 'Edit file' | 'Edit filters' | 'Edit link' | 'Edit translation' | 'Element' | 'Email' | 'Enable selection' | 'Ends with (case-insensitive)' | 'Enter alt text...' | 'Enter full screen' | 'Equal to' | 'Equal to (case-insensitive)' | 'Exit full screen' | 'File deleted' | 'File updated' | 'Files' | 'Filter $items' | 'Filtered results' | 'First name' | 'Folder created' | 'Folder deleted' | 'Folder is empty' | 'Folder renamed' | 'Folders' | 'Go to dashboard' | 'Go to page $page' | 'Go to start page' | 'Greater than' | 'Greater than or equal to' | 'Hide password' | 'Hyperlink' | 'Inactive' | 'Inline formats' | 'Invalid URL' | 'Invalid URL path' | 'Invalid link' | 'Keyboard shortcuts for blocks are active' | 'Language' | 'Last name' | 'Leave' | 'Less than' | 'Less than or equal to' | 'Library' | 'Library is empty' | 'Load more' | 'Log out' | 'Log out from all other sessions' | 'Log out user from all active sessions' | 'Media' | 'Media library' | 'Mirror content to this translation' | 'More options' | 'Move' | 'Move $count $items' | 'Move $count $items to' | 'Move down' | 'Move up' | 'Moved $count $items' | 'My profile' | 'Name' | 'New name' | 'Next page' | 'No' | 'No $items found' | 'No $items matching the current filter were found' | 'No blocks found' | 'No fields to display' | 'No icons found' | 'Not equal to' | 'Open' | 'Open $item' | 'Open $item in new tab' | 'Open in new tab' | 'Open preview in new tab' | 'Open root folder' | 'Password' | 'Paste' | 'Paste after' | 'Paste block from clipboard' | 'Please ensure all block fields are valid before converting the block to a preset' | 'Preset detached' | 'Preview' | 'Previous page' | 'Profile updated' | 'Public URL' | 'Publish' | 'Redirects to' | 'Redo (($count))' | 'Relationship (rel)' | 'Reload preview' | 'Remember me' | 'Remove' | 'Rename' | 'Rename folder' | 'Replace' | 'Required' | 'Restore defaults' | 'Root folder' | 'Save' | 'Save draft' | 'Search $items...' | 'Search blocks...' | 'Search icons...' | 'Search media...' | 'Search results for:' | 'Select' | 'Select $item' | 'Select from media library' | 'Select icon' | 'Show all $items' | 'Show password' | 'Showing $from to $to of $total $items' | 'Sign in' | 'Some filters are not displayed and are omitted from the user interface' | 'Sort in ascending order' | 'Sort in descending order' | 'Starts with (case-insensitive)' | 'Status' | 'Synchronize values' | 'Target' | 'Test path or URL' | 'The $item does not exist' | 'The **$language** translation of this $item does not exist. Do you want to create it?' | 'The **rel** attribute specifies the relationship between the current document and the linked document.' | 'The block **$block** cannot be pasted here' | 'The block has been converted into a preset' | 'The default **alt** attribute value for the image' | 'The file **$file** exceeds the upload limit of $limit' | 'The filename without the extension' | 'The filter in the query string cannot be displayed in the user interface.' | 'The folder name must be lowercase and URL-friendly' | 'The page you\'re looking for doesn\'t exist.' | 'The user has been logged out from all active sessions' | 'There are no compatible blocks that can be added to the selected slot' | 'There are no folders where the selected $selection can be moved to' | 'This action will overwrite the content in the **$language** translation.' | 'This field cannot be displayed in the UI' | 'This field is required' | 'Translation created' | 'Undo (($count))' | 'Untitled' | 'Update' | 'Update alt text' | 'Upload' | 'Upload file(s)' | 'Upload limit is $limit' | 'Uploaded $count $files' | 'View' | 'View $item' | 'View file' | 'View translation' | 'Yes' | 'You don\'t have permission to access this page.' | 'You have been logged out from all other sessions' | 'You must first allow the app access to the clipboard' | 'and' | 'false' | 'file' | 'files' | 'folder' | 'folders' | 'installWelcomeMessage' | 'item' | 'items' | 'or' | 'true'
  'pruvious-server': '$item #$id does not exist and cannot be linked' | 'A page with this path already exists' | 'A preset with this name already exists' | 'A preview with this token already exists' | 'At least one field must be included in the \'select\' parameter' | 'Cannot use operator \'$operator\' on field $field' | 'Cannot use value \'$value\' for operation \'$operation\' on field \'$field\'' | 'DRAFT' | 'Forbidden due to insufficient permissions' | 'Incorrect credentials' | 'Invalid \'$name\' unit' | 'Invalid JSON' | 'Invalid URL' | 'Invalid URL path' | 'Invalid collection' | 'Invalid email address' | 'Invalid input' | 'Invalid input name' | 'Invalid input type' | 'Invalid user ID' | 'Invalid value' | 'Invalid value: \'$value\'' | 'Missing \'from\' language parameter' | 'Missing \'to\' language parameter' | 'Missing \'to\' parameter' | 'PREVIEW' | 'Page not found' | 'Pruvious is already installed' | 'Resource not found' | 'Selected values must be strings' | 'Source and target language cannot be the same' | 'The $item does not exist' | 'The \'$name\' value must be greater than or equal to $min' | 'The \'$name\' value must be less than or equal to $max' | 'The \'$name\' value must be numeric' | 'The \'limit\' parameter must be a non-negative integer' | 'The \'offset\' parameter must be a non-negative integer' | 'The \'page\' parameter must be a positive integer' | 'The \'page\' parameter requires either \'perPage\' or \'limit\' to be present' | 'The \'perPage\' parameter must be a positive integer' | 'The \'populate\' parameter must be a booleanish value' | 'The \'where\' parameter is not valid' | 'The block \'$block\' is not allowed as a root block in the layout \'$layout\'' | 'The block \'$block\' is not allowed in the layout \'$layout\'' | 'The directory must be a URL-safe string' | 'The field \'$field\' cannot be queried' | 'The field \'$field\' does not exist' | 'The file extension cannot be changed' | 'The file path must be unique' | 'The file type must be one of the following: $types' | 'The filename must be a URL-safe string' | 'The filename must not end with a period' | 'The icon does not exist' | 'The icon is not allowed for this field' | 'The image type must be one of the following: $types' | 'The input cannot have more than $count $decimals' | 'The input must be a multiple of $interval between $min and $max' | 'The input must be an integer' | 'The input must be greater than or equal to $min' | 'The input must be less than or equal to $max' | 'The inputs cannot have more than $count $decimals' | 'The inputs must be a multiple of $interval between $min and $max' | 'The inputs must be greater than or equal to $min' | 'The inputs must be integers' | 'The inputs must be less than or equal to $max' | 'The job is not defined' | 'The language code \'$language\' is not supported' | 'The maximum allowable file size is $size' | 'The maximum range between the inputs is $maxRange' | 'The minimum allowed image height is $min pixels' | 'The minimum allowed image width is $min pixels' | 'The minimum range between the inputs is $minRange' | 'The operator \'$operator\' is not valid' | 'The order direction \'$direction\' is not valid' | 'The page path must be a URL-safe string' | 'The password must be at least 8 characters long' | 'The path must start with a slash (\'/\')' | 'The preview token must be a URL-safe string' | 'The repeater must have at least $count $entries' | 'The repeater must not exceed $count $entries' | 'The request body must be an object with key-value pairs' | 'The request body must be either an object with key-value pairs or an array containing key-value objects' | 'The requested job does not exist' | 'The requested job no longer exists' | 'The search structure \'$structure\' does not exist' | 'The second value cannot be less than the first value' | 'The target must be a path starting with a slash (\'/\') or a URL starting with \'http\'' | 'The translation already exists' | 'The upload is not an image' | 'The value must be a lowercase string' | 'This block is not allowed in the slot \'$slot\'' | 'This collection cannot be previewed' | 'This collection does not support translations' | 'This collection is not searchable' | 'This field is read-only' | 'This field is required' | 'This field must be present' | 'This field must be unique' | 'This method is not supported' | 'Unable to determine the request operation' | 'Unauthorized' | 'Unauthorized due to either invalid credentials or missing authentication' | 'Unknown collection name: \'$collection\'' | 'Unrecognized block name' | 'Unrecognized field name' | 'Unrecognized slot name' | 'Using both \'page\' and \'offset\' parameters simultaneously is not permitted' | 'Using both \'perPage\' and \'limit\' parameters simultaneously is not permitted' | 'You are not authorized to change passwords for admin users' | 'You are not authorized to create admin users' | 'You are not authorized to deactivate admin users' | 'You are not authorized to delete admin users' | 'You are not authorized to demote admin users' | 'You are not authorized to modify the email addresses of admin users' | 'You are not authorized to promote users to admin status' | 'You cannot delete your own user account' | 'You don\'t have the necessary permissions to $operate $record' | 'create' | 'delete' | 'manage' | 'read' | 'update' | 'validate'
  'default': never
}

export interface TranslatableStringsInput {
  'pruvious-dashboard': {
    '$add after': {
      'add': string
    }
    '$add before': {
      'add': string
    }
    '$count $errors found': {
      'count': number
    }
    '$item created': {
      'item': string
    }
    '$item deleted': {
      'item': string
    }
    '$item duplicated': {
      'item': string
    }
    '$item link': {
      'item': string
    }
    '$item updated': {
      'item': string
    }
    '$timezone time': {
      'timezone': string
    }
    'A file with the name !!$name!! already exists in the destination folder': {
      'name': string
    }
    'Add $item': {
      'item': string
    }
    '**Allowed types:** $types': {
      'types': string
    }
    'Choose $item': {
      'item': string
    }
    'Confirm to **move** the selected $selection to **$directory**': {
      'selection': string
      'directory': string
    }
    'Create new $item': {
      'item': string
    }
    'Do you want to select all $count $items?': {
      'count': number
      'items': string
    }
    'Edit $item': {
      'item': string
    }
    'Delete $count $items': {
      'count': number
      'items': string
    }
    'Deleted $count $items': {
      'count': number
      'items': string
    }
    'Deselect $item': {
      'item': string
    }
    'Filter $items': {
      'items': string
    }
    'Go to page $page': {
      'page': number
    }
    '**Minimum height:** $height': {
      'height': number
    }
    '**Minimum width:** $width': {
      'width': number
    }
    'Move $count $items': {
      'count': number
      'items': string
    }
    'Move $count $items to': {
      'count': number
      'items': string
    }
    'Moved $count $items': {
      'count': number
      'items': string
    }
    'No $items found': {
      'items': string
    }
    'No $items matching the current filter were found': {
      'items': string
    }
    'Open $item': {
      'item': string
    }
    'Open $item in new tab': {
      'item': string
    }
    'Redo (($count))': {
      'count': number
    }
    'Search $items...': {
      'items': string
    }
    'Select $item': {
      'item': string
    }
    'Show all $items': {
      'items': string
    }
    'Showing $from to $to of $total $items': {
      'from': number
      'to': number
      'total': number
      'items': string
    }
    'The $item does not exist': {
      'item': string
    }
    'The **$language** translation of this $item does not exist. Do you want to create it?': {
      'language': string
      'item': string
    }
    'The block **$block** cannot be pasted here': {
      'block': string
    }
    'The file **$file** exceeds the upload limit of $limit': {
      'file': string
      'limit': string
    }
    'There are no folders where the selected $selection can be moved to': {
      'selection': string
    }
    'This action will overwrite the content in the **$language** translation.': {
      'language': string
    }
    'Undo (($count))': {
      'count': number
    }
    'Upload limit is $limit': {
      'limit': string
    }
    'Uploaded $count $files': {
      'count': number
    }
    'View $item': {
      'item': string
    }
  }
  'pruvious-server': {
    '$item #$id does not exist and cannot be linked': {
      'item': string
      'id': number
    }
    'Cannot use operator \'$operator\' on field $field': {
      'operator': string
      'field': string
    }
    'Cannot use value \'$value\' for operation \'$operation\' on field \'$field\'': {
      'value': string
      'operation': string
      'field': string
    }
    'Invalid \'$name\' unit': {
      'name': string
    }
    'Invalid value: \'$value\'': {
      'value': string
    }
    'The $item does not exist': {
      'item': string
    }
    'The block \'$block\' is not allowed as a root block in the layout \'$layout\'': {
      'block': string
      'layout': string
    }
    'The block \'$block\' is not allowed in the layout \'$layout\'': {
      'block': string
      'layout': string
    }
    'The field \'$field\' cannot be queried': {
      'field': string
    }
    'The field \'$field\' does not exist': {
      'field': string
    }
    'The file type must be one of the following: $types': {
      'types': string
    }
    'The image type must be one of the following: $types': {
      'types': string
    }
    'The \'$name\' value must be greater than or equal to $min': {
      'name': string
      'min': number
    }
    'The \'$name\' value must be less than or equal to $max': {
      'name': string
      'max': number
    }
    'The input cannot have more than $count $decimals': {
      'count': number
    }
    'The input must be a multiple of $interval between $min and $max': {
      'interval': number
      'min': number
      'max': number
    }
    'The input must be greater than or equal to $min': {
      'min': number
    }
    'The input must be less than or equal to $max': {
      'max': number
    }
    'The inputs cannot have more than $count $decimals': {
      'count': number
    }
    'The inputs must be a multiple of $interval between $min and $max': {
      'interval': number
      'min': number
      'max': number
    }
    'The inputs must be greater than or equal to $min': {
      'min': number
    }
    'The inputs must be less than or equal to $max': {
      'max': number
    }
    'The language code \'$language\' is not supported': {
      'language': string
    }
    'The minimum allowed image height is $min pixels': {
      'min': number
    }
    'The minimum allowed image width is $min pixels': {
      'min': number
    }
    'The minimum range between the inputs is $minRange': {
      'minRange': number
    }
    'The maximum allowable file size is $size': {
      'size': string
    }
    'The maximum range between the inputs is $maxRange': {
      'maxRange': number
    }
    'The operator \'$operator\' is not valid': {
      'operator': string
    }
    'The order direction \'$direction\' is not valid': {
      'direction': string
    }
    'The repeater must have at least $count $entries': {
      'count': number
    }
    'The repeater must not exceed $count $entries': {
      'count': number
    }
    'The search structure \'$structure\' does not exist': {
      'structure': string
    }
    'The \'$name\' value must be numeric': {
      'name': string
    }
    'This block is not allowed in the slot \'$slot\'': {
      'slot': string
    }
    'Unknown collection name: \'$collection\'': {
      'collection': string
    }
    'You don\'t have the necessary permissions to $operate $record': {
      'operate': string
      'record': string
    }
  }
  'default': {}
}

export type StandardFieldName = 'block' | 'button-group' | 'checkbox' | 'checkboxes' | 'chips' | 'date' | 'date-range' | 'date-time' | 'date-time-range' | 'editor' | 'file' | 'icon' | 'image' | 'link' | 'number' | 'range' | 'record' | 'records' | 'repeater' | 'select' | 'size' | 'slider' | 'slider-range' | 'switch' | 'text' | 'text-area' | 'time' | 'time-range'

import type { CollectionFieldAdditional, FieldAdditional, FieldInputContext, FieldTypeContext, FieldPopulatorContext, FieldGuardContext, FieldConditionalLogicMatcherContext, FieldSanitizerContext, FieldValidatorContext, FieldGuard, FieldSanitizer, FieldValidator, ResolvedFieldDefinition, ConditionalLogic, ConditionalRule } from '../../../node_modules/pruvious/dist/runtime/fields/field.definition'
export { type CollectionFieldAdditional, type FieldAdditional, type FieldInputContext, type FieldTypeContext, type FieldPopulatorContext, type FieldGuardContext, type FieldConditionalLogicMatcherContext, type FieldSanitizerContext, type FieldValidatorContext, type FieldGuard, type FieldSanitizer, type FieldValidator, type ResolvedFieldDefinition, type ConditionalLogic, type ConditionalRule }

import { defineField } from '../../../node_modules/pruvious/dist/runtime/fields/field.definition'

export { defineField }

export type Field = BlockField | ButtonGroupField | CheckboxField | CheckboxesField | ChipsField | DateField | DateRangeField | DateTimeField | DateTimeRangeField | EditorField | FileField | IconField | ImageField | LinkField | NumberField | RangeField | RecordField | RecordsField | RepeaterField | SelectField | SizeField | SliderField | SliderRangeField | SwitchField | TextAreaField | TextField | TimeField | TimeRangeField

export type CollectionField = Field & { additional?: CollectionFieldAdditional }

export interface BlockField {
  /**
   * The field type.
   */
  type: 'block'

  /**
   * The `block` field options.
   */
  options: FieldOptions['block']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface ButtonGroupField {
  /**
   * The field type.
   */
  type: 'button-group'

  /**
   * The `button-group` field options.
   */
  options: FieldOptions['button-group']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface CheckboxField {
  /**
   * The field type.
   */
  type: 'checkbox'

  /**
   * The `checkbox` field options.
   */
  options: FieldOptions['checkbox']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface CheckboxesField {
  /**
   * The field type.
   */
  type: 'checkboxes'

  /**
   * The `checkboxes` field options.
   */
  options: FieldOptions['checkboxes']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface ChipsField {
  /**
   * The field type.
   */
  type: 'chips'

  /**
   * The `chips` field options.
   */
  options: FieldOptions['chips']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface DateRangeField {
  /**
   * The field type.
   */
  type: 'date-range'

  /**
   * The `date-range` field options.
   */
  options: FieldOptions['date-range']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface DateTimeRangeField {
  /**
   * The field type.
   */
  type: 'date-time-range'

  /**
   * The `date-time-range` field options.
   */
  options: FieldOptions['date-time-range']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface DateTimeField {
  /**
   * The field type.
   */
  type: 'date-time'

  /**
   * The `date-time` field options.
   */
  options: FieldOptions['date-time']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface DateField {
  /**
   * The field type.
   */
  type: 'date'

  /**
   * The `date` field options.
   */
  options: FieldOptions['date']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface EditorField {
  /**
   * The field type.
   */
  type: 'editor'

  /**
   * The `editor` field options.
   */
  options: FieldOptions['editor']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface FileField {
  /**
   * The field type.
   */
  type: 'file'

  /**
   * The `file` field options.
   */
  options: FieldOptions['file']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface IconField {
  /**
   * The field type.
   */
  type: 'icon'

  /**
   * The `icon` field options.
   */
  options: FieldOptions['icon']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface ImageField {
  /**
   * The field type.
   */
  type: 'image'

  /**
   * The `image` field options.
   */
  options: FieldOptions['image']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface LinkField {
  /**
   * The field type.
   */
  type: 'link'

  /**
   * The `link` field options.
   */
  options: FieldOptions['link']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface NumberField {
  /**
   * The field type.
   */
  type: 'number'

  /**
   * The `number` field options.
   */
  options: FieldOptions['number']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface RangeField {
  /**
   * The field type.
   */
  type: 'range'

  /**
   * The `range` field options.
   */
  options: FieldOptions['range']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface RecordField {
  /**
   * The field type.
   */
  type: 'record'

  /**
   * The `record` field options.
   */
  options: FieldOptions['record']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface RecordsField {
  /**
   * The field type.
   */
  type: 'records'

  /**
   * The `records` field options.
   */
  options: FieldOptions['records']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface RepeaterField {
  /**
   * The field type.
   */
  type: 'repeater'

  /**
   * The `repeater` field options.
   */
  options: FieldOptions['repeater']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface SelectField {
  /**
   * The field type.
   */
  type: 'select'

  /**
   * The `select` field options.
   */
  options: FieldOptions['select']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface SizeField {
  /**
   * The field type.
   */
  type: 'size'

  /**
   * The `size` field options.
   */
  options: FieldOptions['size']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface SliderRangeField {
  /**
   * The field type.
   */
  type: 'slider-range'

  /**
   * The `slider-range` field options.
   */
  options: FieldOptions['slider-range']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface SliderField {
  /**
   * The field type.
   */
  type: 'slider'

  /**
   * The `slider` field options.
   */
  options: FieldOptions['slider']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface SwitchField {
  /**
   * The field type.
   */
  type: 'switch'

  /**
   * The `switch` field options.
   */
  options: FieldOptions['switch']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface TextAreaField {
  /**
   * The field type.
   */
  type: 'text-area'

  /**
   * The `text-area` field options.
   */
  options: FieldOptions['text-area']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface TextField {
  /**
   * The field type.
   */
  type: 'text'

  /**
   * The `text` field options.
   */
  options: FieldOptions['text']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface TimeRangeField {
  /**
   * The field type.
   */
  type: 'time-range'

  /**
   * The `time-range` field options.
   */
  options: FieldOptions['time-range']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface TimeField {
  /**
   * The field type.
   */
  type: 'time'

  /**
   * The `time` field options.
   */
  options: FieldOptions['time']

  /**
   * Additional field configurations.
   */
  additional?: FieldAdditional
}

export interface StandardFieldOptions {
  'block': {
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'contentBlocks' => 'Content blocks'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: CastedBlockData
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'button-group': {
    /**
     * A key-value object containing permissible choices, where the key represents the choice value, and the value represents the corresponding label.
     */
    choices: Record<string, string>
    
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'iconSize' => 'Icon size'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: string | null
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'checkbox': {
    /**
     * Indicates whether the field input is mandatory, requiring its presence during creation, with the value set to `true`.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * Text to display on the right side of the input control.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'darkMode' => 'Dark mode'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default false
     */
    default?: boolean
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in the tooltip when hovering over the field label.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'checkboxes': {
    /**
     * A key-value object containing permissible choices, where the key represents the choice value, and the value represents the corresponding checkbox label.
     */
    choices: Record<string, string>
    
    /**
     * Indicates whether the field input is mandatory, meaning it must be present during creation, and at least one value must be selected.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'availableSizes' => 'Available sizes'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default []
     */
    default?: string[]
    
    /**
     * A string that specifies the `name` for the input controls.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Indicates whether the checkboxes are sortable.
     *
     * @default false
     */
    sortable?: boolean
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'chips': {
    /**
     * A key-value object containing permissible choices, where the key represents the choice value, and the value represents the corresponding chip label.
     */
    choices: Record<string, string>
    
    /**
     * Indicates whether the field input is mandatory, meaning it must be present during creation, and at least one value must be selected.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'postTags' => 'Post tags'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default []
     */
    default?: string[]
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the search input when there is no value.
     */
    placeholder?: string
    
    /**
     * Indicates whether the chips are sortable.
     *
     * @default false
     */
    sortable?: boolean
    
    /**
     * Indicates whether to show chip values as tooltips.
     *
     * @default false
     */
    tooltips?: boolean
    
    /**
     * The number of visible suggestion choices in the dropdown list (must be less than 30).
     */
    visibleSuggestions?: number
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'date-range': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'travelDate' => 'Travel date'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default [null, null]
     */
    default?: [number | null, number | null]
    
    /**
     * The earliest possible date (as timestamp in milliseconds).
     *
     * @default -8639999949600000
     */
    min?: number
    
    /**
     * The latest possible date (as timestamp in milliseconds).
     *
     * @default 8639999949600000
     */
    max?: number
    
    /**
     * A string that specifies the `name` for the input controls.
     * You can specify the name as a tuple of strings.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string | [string, string]
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input elements when they have no value set.
     * You can specify the placeholder as a tuple of strings.
     */
    placeholder?: string | [string, string]
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     * You can specify the clearable option as a tuple of booleans.
     *
     * @default true
     */
    clearable?: boolean | [boolean, boolean]
  }
  'date-time-range': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'travelDate' => 'Travel date'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default [null, null]
     */
    default?: [number | null, number | null]
    
    /**
     * The earliest possible date and time (as timestamp in milliseconds).
     *
     * @default -8639999949600000
     */
    min?: number
    
    /**
     * The latest possible date and time (as timestamp in milliseconds).
     *
     * @default 8639999949600000
     */
    max?: number
    
    /**
     * A boolean flag indicating whether to use UTC time in the date-time pickers.
     * The stored values are always in UTC.
     *
     * @default false
     */
    utc?: boolean
    
    /**
     * A string that specifies the `name` for the input controls.
     * You can specify the name as a tuple of strings.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string | [string, string]
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input elements when they have no value set.
     * You can specify the placeholder as a tuple of strings.
     */
    placeholder?: string | [string, string]
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     * You can specify the clearable option as a tuple of booleans.
     *
     * @default true
     */
    clearable?: boolean | [boolean, boolean]
  }
  'date-time': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'eventDate' => 'Event date'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: number | null
    
    /**
     * The earliest possible date and time (as timestamp in milliseconds).
     *
     * @default -8639999949600000
     */
    min?: number
    
    /**
     * The latest possible date and time (as timestamp in milliseconds).
     *
     * @default 8639999949600000
     */
    max?: number
    
    /**
     * A boolean flag indicating whether to use UTC time in the date-time picker.
     * The stored value is always in UTC.
     *
     * @default false
     */
    utc?: boolean
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     *
     * @default true
     */
    clearable?: boolean
  }
  'date': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'eventDate' => 'Event date'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: number | null
    
    /**
     * The earliest possible date (as timestamp in milliseconds).
     *
     * @default -8639999949600000
     */
    min?: number
    
    /**
     * The latest possible date (as timestamp in milliseconds).
     *
     * @default 8639999949600000
     */
    max?: number
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     *
     * @default true
     */
    clearable?: boolean
  }
  'editor': {
    /**
     * Specifies that the field input is mandatory during creation, and the field value cannot be empty.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'heroContent' => 'Hero content'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default '<p></p>'
     */
    default?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * An array of strings that specifies the toolbar buttons to display.
     *
     * The available buttons are as follows:
     *
     * - `blockFormats`
     * - `blockquote`
     * - `bold`
     * - `bulletList`
     * - `center`
     * - `clear`
     * - `code`
     * - `codeBlock`
     * - `heading1`
     * - `heading2`
     * - `heading3`
     * - `heading4`
     * - `heading5`
     * - `heading6`
     * - `hardBreak`
     * - `highlight`
     * - `horizontalRule`
     * - `inlineFormats`
     * - `italic`
     * - `justify`
     * - `left`
     * - `link`
     * - `normalize`
     * - `orderedList`
     * - `paragraph`
     * - `redo`
     * - `right`
     * - `strike`
     * - `subscript`
     * - `superscript`
     * - `underline`
     * - `undo`
     */
    toolbar?: ('blockFormats' | 'blockquote' | 'bold' | 'bulletList' | 'center' | 'clear' | 'code' | 'codeBlock' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'hardBreak' | 'highlight' | 'horizontalRule' | 'inlineFormats' | 'italic' | 'justify' | 'left' | 'link' | 'normalize' | 'orderedList' | 'paragraph' | 'redo' | 'right' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'undo')[]
    
    /**
     * An array of objects that specifies the block formats to display in the toolbar.
     * Block formats are used to specify CSS classes to be applied to the block element.
     * They are displayed as a dropdown list in the toolbar.
     *
     * @example
     * ```typescript
     * [{ className: 'p-6 border rounded', label: 'Boxed', tags: ['div'] }]
     * ```
     */
    blockFormats?: { className: string; label?: string; tags?: string[] }[]
    
    /**
     * An array of objects that specifies the inline formats to display in the toolbar.
     * Inline formats are used to specify CSS classes to be applied to the inline element.
     * They are displayed as a dropdown list in the toolbar.
     *
     * @example
     * ```typescript
     * [{ className: 'text-red-500', label: 'Red' }]
     * ```
     */
    inlineFormats?: { className: string; label?: string; }[]
    
    /**
     * Specifies whether to allow the editor to enter fullscreen mode.
     *
     * @default true
     */
    allowFullscreen?: boolean
  }
  'file': {
    /**
     * The fields of the 'uploads' collection to be returned when this field's value is populated.
     *
     * @default { directory: true, filename: true }
     */
    fields?: Record<string, true>
    
    /**
     * Specifies whether to populate the fields of the 'uploads' collection.
     * The 'uploads' collection does not have fields that can be populated by default.
     *
     * @default false
     */
    populate?: boolean
    
    /**
     * Specifies whether the field input is required during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'productVideo' => 'Product video'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: number | null
    
    /**
     * The maximum allowed file size in bytes.
     * You can provide this limit as a string (e.g., '32 MB') or as an integer, reflecting byte count.
     * String sizes are parsed using the `bytes` npm package.
     *
     * By default there is no limit.
     */
    maxSize?: number | string
    
    /**
     * An array of allowed file types or extensions.
     *
     * If not specified, all file types are allowed.
     *
     * @example
     * ```typescript
     * ['video/quicktime', '.mp4', 'AVI']
     * ```
     */
    allowedTypes?: string[]
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'icon': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'categoryIcon' => 'Category icon'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: Icon | null
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * An array of icon filenames (without the extension) from the `icons` folder in the Pruvious project.
     * If specified, only these icons can be selected.
     * By default, all icons can be selected.
     *
     * @default '*'
     */
    allow?: Icon[] | '*'
    
    /**
     * An array of icon filenames (without the extension) from the `icons` folder in the Pruvious project.
     * If specified, these icons cannot be selected.
     * By default, no icons are excluded.
     *
     * @default []
     */
    exclude?: Icon[]
  }
  'image': {
    /**
     * Specifies whether the field input is required during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'productImage' => 'Product image'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: { uploadId: number, alt: string } | null
    
    /**
     * Specifies whether to transform SVG images.
     * If `false`, the `sources` option is disregarded.
     *
     * @default false
     */
    transformSvgs?: boolean
    
    /**
     * An array of optimized image sources.
     * When this field is populated, the resulting object will include a `sources` property.
     * This property is an array of objects, each with the following properties:
     *
     * - `srcset` - The URL or absolute path of the image source.
     * - `width` - The width of the image source in pixels.
     * - `height` - The height of the image source in pixels.
     * - `type` - The MIME type of the image source.
     * - `media` - The media query of the image source or `null` if not specified.
     *
     * @default []
     *
     * @example
     * ```typescript
     * [
     *   { media: '(max-width: 768px)', format: 'webp', width: 1024, height: 1024, resize: 'cover' },
     *   { media: '(max-width: 768px)', format: 'jpeg', width: 1024, height: 1024, resize: 'cover' },
     *   { format: 'webp', width: 1600, height: 1600, resize: 'cover' },
     *   { format: 'jpeg', width: 1600, height: 1600, resize: 'cover' },
     * ]
     * ```
     */
    sources?: ImageSource[]
    
    /**
     * An array of allowed image types or extensions.
     *
     * @default [
     *   'image/jpeg',
     *   'image/png',
     *   'image/svg+xml',
     *   'image/webp',
     *   'image/gif',
     *   'image/apng',
     *   'image/avif',
     *   'image/bmp',
     *   'image/heic',
     *   'image/tiff',
     *   'image/x-icon',
     * ]
     *
     * @example
     * ```typescript
     * ['image/jpeg', '.png', 'SVG']
     * ```
     */
    allowedTypes?: string[]
    
    /**
     * The minimum allowed image width in pixels.
     *
     * @default 0
     */
    minWidth?: number
    
    /**
     * The minimum allowed image height in pixels.
     *
     * @default 0
     */
    minHeight?: number
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'link': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'landingPage' => 'Landing page'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default ''
     */
    default?: string
    
    /**
     * A string that specifies the `name` for the input control, influencing autocomplete behavior in some browsers.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * The number of visible link choices in the dropdown list (must be less than 30).
     */
    visibleChoices?: number
  }
  'number': {
    /**
     * Specifies whether the field input is mandatory. The requirement check allows the value `0` to be considered as valid.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'numberOfGuests' => 'Number of guests'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * By default, this is set to 0 if possible, otherwise it uses the `min` value.
     */
    default?: number
    
    /**
     * Specifies the maximum number of allowed decimal places for the number.
     *
     * Set to 0 to allow integers only.
     *
     * **Caution:** Consider JavaScript Number limits (`MIN_SAFE_INTEGER` and `MAX_SAFE_INTEGER`).
     *
     * @default 0
     */
    decimals?: number
    
    /**
     * The minimum allowed number.
     *
     * @default Number.MIN_SAFE_INTEGER (-9007199254740991)
     */
    min?: number
    
    /**
     * The maximum allowed number.
     *
     * @default Number.MAX_SAFE_INTEGER (9007199254740991)
     */
    max?: number
    
    /**
     * The `step` attribute specifies the interval between legal numbers in an `<input>` element.
     *
     * @default 1
     */
    step?: number
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A short text to be prepended before the input element.
     */
    prefix?: string
    
    /**
     * A short text to be appended after the input element.
     */
    suffix?: string
  }
  'range': {
    /**
     * Specifies whether the field input is mandatory. The requirement check allows the value `[0, 0]` to be considered as valid.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'temperatureRange' => 'Temperature range'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * By default, this is set to the minimum and maximum values.
     */
    default?: [number, number]
    
    /**
     * Specifies the maximum number of allowed decimal places for the inputs.
     *
     * Set to 0 to allow integers only.
     *
     * **Caution:** Consider JavaScript Number limits (`MIN_SAFE_INTEGER` and `MAX_SAFE_INTEGER`).
     *
     * @default 0
     */
    decimals?: number
    
    /**
     * The minimum allowed number.
     *
     * @default 0
     */
    min?: number
    
    /**
     * The maximum allowed number.
     *
     * @default 100
     */
    max?: number
    
    /**
     * The `step` attribute specifies the interval between legal numbers in the `<input>` elements.
     *
     * @default 1
     */
    step?: number
    
    /**
     * The minimum range between the two inputs.
     *
     * @default 0
     */
    minRange?: number
    
    /**
     * Specifies the maximum range between the two inputs.
     *
     * By default, this is set to `max - min`.
     */
    maxRange?: number
    
    /**
     * A string that specifies the `name` for the input controls.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string | [string | null, string | null]
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input elements when they have no value set.
     */
    placeholder?: string | [string | null, string | null]
    
    /**
     * A short text to be prepended before the input elements.
     */
    prefix?: string | [string | null, string | null]
    
    /**
     * A short text to be appended after the input elements.
     */
    suffix?: string | [string | null, string | null]
  }
  'record': {
    /**
     * The name of the multi-entry collection from which to retrieve a record.
     */
    collection: MultiCollectionName
    
    /**
     * The fields of the selected collection to be returned when this field's value is populated.
     *
     * @default { id: true }
     */
    fields?: Record<string, true>
    
    /**
     * Specifies whether to populate the fields of the selected collection.
     * Exercise **caution** when using this option, as it may trigger infinite loops during population if the related collection fields depend on additional population loops.
     *
     * @default false
     */
    populate?: boolean
    
    /**
     * Specifies whether the field input is required during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'parentPage' => 'Parent page'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: number | null
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A boolean indicating whether to display a clear button that removes the current input value.
     *
     * @default true
     */
    clearable?: boolean
    
    /**
     * The number of visible choices in the dropdown list (must be less than 30).
     */
    visibleChoices?: number
    
    /**
     * The collection field or fields used as the record label.
     * When using multiple fields, the first field is used as the main label, and the second field is displayed only in search results.
     *
     * By default, the fields from the `dashboard.primaryField` and `dashboard.overviewTable.searchLabel` options of the selected collection are used.
     */
    recordLabel?: string | [string, string]
    
    /**
     * An array of field names from the selected collection to display below the select input for the selected record.
     *
     * @default []
     */
    details?: string[]
  }
  'records': {
    /**
     * The name of the multi-entry collection from which to retrieve the records.
     */
    collection: MultiCollectionName
    
    /**
     * The fields of the selected collection to be returned when this field's values are populated.
     *
     * @default { id: true }
     */
    fields?: Record<string, true>
    
    /**
     * Specifies whether to populate the fields of the selected collection.
     * Exercise **caution** when using this option, as it may trigger infinite loops during population if the related collection fields depend on additional population loops.
     *
     * @default false
     */
    populate?: boolean
    
    /**
     * Indicates whether the field input is mandatory, meaning it must be present during creation, and at least one record must be selected.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'categories' => 'Categories'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default []
     */
    default?: number[]
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the search input when there is no value.
     */
    placeholder?: string
    
    /**
     * Indicates whether the records are sortable.
     *
     * @default false
     */
    sortable?: boolean
    
    /**
     * The number of visible choices in the dropdown list (must be less than 30).
     */
    visibleChoices?: number
    
    /**
     * The collection field or fields used as the record label.
     * When using multiple fields, the first field is used as the main label, and the second field is displayed only in search results.
     *
     * By default, the fields from the `dashboard.primaryField` and `dashboard.overviewTable.searchLabel` options of the selected collection are used.
     */
    recordLabel?: string | [string, string]
    
    /**
     * An array of field names from the selected collection to display in tooltips.
     *
     * @default []
     */
    details?: string[]
  }
  'repeater': {
    /**
     * An object of subfields that define the structure of each repeater entry.
     *
     * @example
     * ```typescript
     * {
     *   name: { type: 'text' },
     *   age: { type: 'number', required: true },
     * }
     * ```
     */
    subfields: Record<string, Field & { additional?: FieldAdditional }>
    
    /**
     * Specifies that the field input is mandatory during creation, requiring at least one entry.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'productVariations' => 'Product variations'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default []
     */
    default?: Record<string, any>[]
    
    /**
     * Defines the field layout in the repeater.
     *
     * The layout array accepts the following values:
     *
     * - **`string`** - The subfield name.
     * - **`string[]`** - An array of subfield names that will be displayed in a row.
     * - **`Record<string, FieldLayout[]>`** - A tabbed layout.
     * - **`'<./components/CustomComponent.vue>'`**- A Vue component path relative to the project root.
     *
     * If not specified, all displayable subfields will be shown vertically one after another.
     *
     * Custom components can be used to display additional information about the collection.
     * They receive the following props:
     *
     * - **`record`** - The current record.
     * - **`errors`** - A key-value object with field names (in dot-notation) as keys and error messages as values.
     * - **`disabled`** - A boolean indicating whether the user has permission to create or edit the record.
     * - **`compact`** - A boolean indicating whether the component is displayed in a compact mode.
     *
     * @example
     * ```typescript
     * [
     *   'name',                   // Single field
     *   ['email', 'phone | 40%'], // Two fields in a row
     *   {
     *     'Tab 1': ['street', 'city', 'zip'],       // Three fields in a row
     *     'Tab 2': ['<./component/CustomMap.vue>'], // Vue component path relative to the project root
     *   }
     * ]
     * ```
     */
    fieldLayout?: FieldLayout[] | undefined
    
    /**
     * The minimum allowed number of repeater entries.
     *
     * @default 0
     */
    min?: number
    
    /**
     * The maximum allowed number of repeater entries.
     *
     * @default Number.MAX_SAFE_INTEGER
     */
    max?: number
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * The text label displayed on the button used to add a new repeater item.
     */
    addLabel?: string
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'select': {
    /**
     * A key-value object containing permissible choices, where the key represents the choice value, and the value represents the corresponding label.
     */
    choices: Record<string, string>
    
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'iconSize' => 'Icon size'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: string | null
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A boolean indicating whether to display a clear button that sets the input value to `null`.
     *
     * @default false
     */
    clearable?: boolean
    
    /**
     * The number of visible choices in the dropdown list (must be less than 30).
     */
    visibleChoices?: number
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'size': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'imageSize' => 'Image size'
     */
    label?: string
    
    /**
     * A record of subfields that make up the field.
     * The keys of the record are used as the subfield names.
     *
     * @default { width: {}, height: {} }
     */
    inputs?: Record<string, SizeInput>
    
    /**
     * The default field value.
     *
     * By default, all defined size `inputs` are set to their `min` value and first unit in the a `units` array.
     */
    default?: Record<string, { value: number; unit?: string }>
    
    /**
     * A string that specifies the base `name` for the input controls.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Whether the size values can be synchronized in the field UI.
     *
     * @default false
     */
    syncable?: boolean
  }
  'slider-range': {
    /**
     * Specifies whether the field input is mandatory. The requirement check allows the value `[0, 0]` to be considered as valid.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'temperatureRange' => 'Temperature range'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * By default, this is set to the minimum and maximum values.
     */
    default?: [number, number]
    
    /**
     * The minimum allowed number.
     *
     * @default 0
     */
    min?: number
    
    /**
     * The maximum allowed number.
     *
     * @default 100
     */
    max?: number
    
    /**
     * Specifies the number intervals in the slider.
     *
     * @default 1
     */
    step?: number
    
    /**
     * The minimum range between the two inputs.
     *
     * @default 0
     */
    minRange?: number
    
    /**
     * Specifies the maximum range between the two inputs.
     *
     * By default, this is set to `max - min`.
     */
    maxRange?: number
    
    /**
     * Specifies whether to display the number intervals (steps) in the slider.
     * Marks can be customized by passing an array of numbers.
     *
     * @default false
     */
    marks?: boolean | number[]
    
    /**
     * Specifies whether to display the input fields next to the slider.
     *
     * @default true
     */
    inputs?: boolean
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'slider': {
    /**
     * Specifies whether the field input is mandatory. The requirement check allows the value `0` to be considered as valid.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'maxGuests' => 'Max guests'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * By default, this is set to 0 if possible, otherwise it uses the `min` value.
     */
    default?: number
    
    /**
     * The minimum allowed number.
     *
     * @default 0
     */
    min?: number
    
    /**
     * The maximum allowed number.
     *
     * @default 100
     */
    max?: number
    
    /**
     * Specifies the number intervals in the slider.
     *
     * @default 1
     */
    step?: number
    
    /**
     * Specifies whether to display the number intervals (steps) in the slider.
     * Marks can be customized by passing an array of numbers.
     *
     * @default false
     */
    marks?: boolean | number[]
    
    /**
     * Specifies whether to display an input field next to the slider.
     *
     * @default true
     */
    input?: boolean
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'switch': {
    /**
     * Indicates whether the field input is mandatory, requiring its presence during creation, with the value set to `true`.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'showTitle' => 'Show title'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default false
     */
    default?: boolean
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * The label for the `true` value.
     *
     * @default 'Yes'
     */
    trueLabel?: string
    
    /**
     * The label for the `false` value.
     *
     * @default 'No'
     */
    falseLabel?: string
    
    /**
     * A brief descriptive text displayed in code comments and in the tooltip when hovering over the field label.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
  }
  'text-area': {
    /**
     * Specifies that the input field is mandatory during creation and cannot have an empty string value.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'description' => 'Description'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default ''
     */
    default?: string
    
    /**
     * Specifies whether to remove whitespace from both ends of the input string.
     *
     * @default true
     */
    trim?: boolean
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * Specifies whether the text in the field should be automatically wrapped.
     *
     * If `false`, the text will only wrap on enter or hard breaks.
     */
    wrap?: boolean
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A booleanish value indicating whether spellchecking is enabled for the input element.
     *
     * @default 'false'
     */
    spellcheck?: boolean | 'true' | 'false'
  }
  'text': {
    /**
     * Specifies that the input field is mandatory during creation and cannot have an empty string value.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'firstName' => 'First name'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default ''
     */
    default?: string
    
    /**
     * Specifies whether to remove whitespace from both ends of the input string.
     *
     * @default true
     */
    trim?: boolean
    
    /**
     * A string that specifies the `name` for the input control, influencing autocomplete behavior in some browsers.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * Input `type` of the control.
     *
     * @default 'text'
     */
    type?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A string specifying autocomplete behavior for the input element.
     *
     * @default 'off'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    autocomplete?: string
    
    /**
     * A booleanish value indicating whether spellchecking is enabled for the input element.
     *
     * @default 'false'
     */
    spellcheck?: boolean | 'true' | 'false'
    
    /**
     * A short text to be prepended before the input element.
     */
    prefix?: string
    
    /**
     * A short text to be appended after the input element.
     */
    suffix?: string
    
    /**
     * A boolean indicating whether to display a clear button that removes the current input text.
     *
     * @default false
     */
    clearable?: boolean
    
    /**
     * A **stringified** TypeScript type used for overriding the automatically generated field value type.
     * This is particularly handy when field types are unavailable during the initial field declaration.
     *
     * Note: This feature is only applicable when declaring the field in a collection.
     */
    overrideType?: string
  }
  'time-range': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'eventTime' => 'Event time'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default [null, null]
     */
    default?: [number | null, number | null]
    
    /**
     * The earliest possible time (as timestamp in milliseconds).
     *
     * @default 0
     */
    min?: number
    
    /**
     * The latest possible time (as timestamp in milliseconds).
     *
     * @default 86399999
     */
    max?: number
    
    /**
     * A string that specifies the `name` for the input controls.
     * You can specify the name as a tuple of strings.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string | [string, string]
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input elements when they have no value set.
     * You can specify the placeholder as a tuple of strings.
     */
    placeholder?: string | [string, string]
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     * You can specify the clearable option as a tuple of booleans.
     *
     * @default true
     */
    clearable?: boolean | [boolean, boolean]
  }
  'time': {
    /**
     * Specifies that the field input is mandatory during creation.
     *
     * @default false
     */
    required?: boolean
    
    /**
     * The field label displayed in the UI.
     *
     * By default, it is automatically generated based on the property name assigned to the field.
     * Example: 'eventTime' => 'Event time'
     */
    label?: string
    
    /**
     * The default field value.
     *
     * @default null
     */
    default?: number | null
    
    /**
     * The earliest possible time (as timestamp in milliseconds).
     *
     * @default 0
     */
    min?: number
    
    /**
     * The latest possible time (as timestamp in milliseconds).
     *
     * @default 86399999
     */
    max?: number
    
    /**
     * A string that specifies the `name` for the input control.
     *
     * If not specified, the `name` attribute will be automatically generated.
     */
    name?: string
    
    /**
     * A brief descriptive text displayed in code comments and in a tooltip at the upper right corner of the field.
     *
     * Use an array to handle line breaks.
     */
    description?: string | string[]
    
    /**
     * Text that appears in the input element when it has no value set.
     */
    placeholder?: string
    
    /**
     * A boolean indicating whether to display a clear button that removes the current value.
     *
     * @default true
     */
    clearable?: boolean
  }
}

export interface FieldOptions {
  'block': StandardFieldOptions['block']
  'button-group': StandardFieldOptions['button-group']
  'checkbox': StandardFieldOptions['checkbox']
  'checkboxes': StandardFieldOptions['checkboxes']
  'chips': StandardFieldOptions['chips']
  'date-range': StandardFieldOptions['date-range']
  'date-time-range': StandardFieldOptions['date-time-range']
  'date-time': StandardFieldOptions['date-time']
  'date': StandardFieldOptions['date']
  'editor': StandardFieldOptions['editor']
  'file': StandardFieldOptions['file']
  'icon': StandardFieldOptions['icon']
  'image': StandardFieldOptions['image']
  'link': StandardFieldOptions['link']
  'number': StandardFieldOptions['number']
  'range': StandardFieldOptions['range']
  'record': StandardFieldOptions['record']
  'records': StandardFieldOptions['records']
  'repeater': StandardFieldOptions['repeater']
  'select': StandardFieldOptions['select']
  'size': StandardFieldOptions['size']
  'slider-range': StandardFieldOptions['slider-range']
  'slider': StandardFieldOptions['slider']
  'switch': StandardFieldOptions['switch']
  'text-area': StandardFieldOptions['text-area']
  'text': StandardFieldOptions['text']
  'time-range': StandardFieldOptions['time-range']
  'time': StandardFieldOptions['time']
}

import { vueField as blockField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/block.field'
export { blockField }

import { vueSubfield as blockSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/block.field'
export { blockSubfield }

export function blockFieldTrap(options?: any, additional?: any): BlockField {
  return { type: 'block', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as buttonGroupField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/button-group.field'
export { buttonGroupField }

import { vueSubfield as buttonGroupSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/button-group.field'
export { buttonGroupSubfield }

export function buttonGroupFieldTrap(options?: any, additional?: any): ButtonGroupField {
  return { type: 'button-group', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `checkbox` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function checkboxField(options?: FieldOptions['checkbox'], additional?: FieldAdditional) {
  return Boolean as unknown as PropType<boolean>
}

/**
 * Create a new `checkbox` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function checkboxSubfield(options?: FieldOptions['checkbox'], additional?: FieldAdditional) {
  return Boolean as unknown as boolean
}

export function checkboxFieldTrap(options?: any, additional?: any): CheckboxField {
  return { type: 'checkbox', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as checkboxesField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/checkboxes.field'
export { checkboxesField }

import { vueSubfield as checkboxesSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/checkboxes.field'
export { checkboxesSubfield }

export function checkboxesFieldTrap(options?: any, additional?: any): CheckboxesField {
  return { type: 'checkboxes', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as chipsField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/chips.field'
export { chipsField }

import { vueSubfield as chipsSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/chips.field'
export { chipsSubfield }

export function chipsFieldTrap(options?: any, additional?: any): ChipsField {
  return { type: 'chips', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `date-range` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateRangeField(options?: FieldOptions['date-range'], additional?: FieldAdditional) {
  return Object as unknown as PropType<[number | null, number | null]>
}

/**
 * Create a new `date-range` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateRangeSubfield(options?: FieldOptions['date-range'], additional?: FieldAdditional) {
  return Object as unknown as [number | null, number | null]
}

export function dateRangeFieldTrap(options?: any, additional?: any): DateRangeField {
  return { type: 'date-range', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `date-time-range` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateTimeRangeField(options?: FieldOptions['date-time-range'], additional?: FieldAdditional) {
  return Object as unknown as PropType<[number | null, number | null]>
}

/**
 * Create a new `date-time-range` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateTimeRangeSubfield(options?: FieldOptions['date-time-range'], additional?: FieldAdditional) {
  return Object as unknown as [number | null, number | null]
}

export function dateTimeRangeFieldTrap(options?: any, additional?: any): DateTimeRangeField {
  return { type: 'date-time-range', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `date-time` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateTimeField(options?: FieldOptions['date-time'], additional?: FieldAdditional) {
  return Number as unknown as PropType<number | null>
}

/**
 * Create a new `date-time` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateTimeSubfield(options?: FieldOptions['date-time'], additional?: FieldAdditional) {
  return Number as unknown as number | null
}

export function dateTimeFieldTrap(options?: any, additional?: any): DateTimeField {
  return { type: 'date-time', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `date` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateField(options?: FieldOptions['date'], additional?: FieldAdditional) {
  return Number as unknown as PropType<number | null>
}

/**
 * Create a new `date` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function dateSubfield(options?: FieldOptions['date'], additional?: FieldAdditional) {
  return Number as unknown as number | null
}

export function dateFieldTrap(options?: any, additional?: any): DateField {
  return { type: 'date', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `editor` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function editorField(options?: FieldOptions['editor'], additional?: FieldAdditional) {
  return String as unknown as PropType<string>
}

/**
 * Create a new `editor` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function editorSubfield(options?: FieldOptions['editor'], additional?: FieldAdditional) {
  return String as unknown as string
}

export function editorFieldTrap(options?: any, additional?: any): EditorField {
  return { type: 'editor', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as fileField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/file.field'
export { fileField }

import { vueSubfield as fileSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/file.field'
export { fileSubfield }

export function fileFieldTrap(options?: any, additional?: any): FileField {
  return { type: 'file', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `icon` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function iconField(options?: FieldOptions['icon'], additional?: FieldAdditional) {
  return String as unknown as PropType<Icon | null>
}

/**
 * Create a new `icon` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function iconSubfield(options?: FieldOptions['icon'], additional?: FieldAdditional) {
  return String as unknown as Icon | null
}

export function iconFieldTrap(options?: any, additional?: any): IconField {
  return { type: 'icon', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `image` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function imageField(options?: FieldOptions['image'], additional?: FieldAdditional) {
  return Object as unknown as PropType<Image | null>
}

/**
 * Create a new `image` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function imageSubfield(options?: FieldOptions['image'], additional?: FieldAdditional) {
  return Object as unknown as Image | null
}

export function imageFieldTrap(options?: any, additional?: any): ImageField {
  return { type: 'image', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `link` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function linkField(options?: FieldOptions['link'], additional?: FieldAdditional) {
  return String as unknown as PropType<string>
}

/**
 * Create a new `link` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function linkSubfield(options?: FieldOptions['link'], additional?: FieldAdditional) {
  return String as unknown as string
}

export function linkFieldTrap(options?: any, additional?: any): LinkField {
  return { type: 'link', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `number` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function numberField(options?: FieldOptions['number'], additional?: FieldAdditional) {
  return Number as unknown as PropType<number>
}

/**
 * Create a new `number` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function numberSubfield(options?: FieldOptions['number'], additional?: FieldAdditional) {
  return Number as unknown as number
}

export function numberFieldTrap(options?: any, additional?: any): NumberField {
  return { type: 'number', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `range` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function rangeField(options?: FieldOptions['range'], additional?: FieldAdditional) {
  return Object as unknown as PropType<[number, number]>
}

/**
 * Create a new `range` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function rangeSubfield(options?: FieldOptions['range'], additional?: FieldAdditional) {
  return Object as unknown as [number, number]
}

export function rangeFieldTrap(options?: any, additional?: any): RangeField {
  return { type: 'range', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as recordField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/record.field'
export { recordField }

import { vueSubfield as recordSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/record.field'
export { recordSubfield }

export function recordFieldTrap(options?: any, additional?: any): RecordField {
  return { type: 'record', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as recordsField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/records.field'
export { recordsField }

import { vueSubfield as recordsSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/records.field'
export { recordsSubfield }

export function recordsFieldTrap(options?: any, additional?: any): RecordsField {
  return { type: 'records', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as repeaterField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/repeater.field'
export { repeaterField }

import { vueSubfield as repeaterSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/repeater.field'
export { repeaterSubfield }

export function repeaterFieldTrap(options?: any, additional?: any): RepeaterField {
  return { type: 'repeater', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as selectField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/select.field'
export { selectField }

import { vueSubfield as selectSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/select.field'
export { selectSubfield }

export function selectFieldTrap(options?: any, additional?: any): SelectField {
  return { type: 'select', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as sizeField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/size.field'
export { sizeField }

import { vueSubfield as sizeSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/size.field'
export { sizeSubfield }

export function sizeFieldTrap(options?: any, additional?: any): SizeField {
  return { type: 'size', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `slider-range` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function sliderRangeField(options?: FieldOptions['slider-range'], additional?: FieldAdditional) {
  return Object as unknown as PropType<[number, number]>
}

/**
 * Create a new `slider-range` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function sliderRangeSubfield(options?: FieldOptions['slider-range'], additional?: FieldAdditional) {
  return Object as unknown as [number, number]
}

export function sliderRangeFieldTrap(options?: any, additional?: any): SliderRangeField {
  return { type: 'slider-range', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `slider` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function sliderField(options?: FieldOptions['slider'], additional?: FieldAdditional) {
  return Number as unknown as PropType<number>
}

/**
 * Create a new `slider` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function sliderSubfield(options?: FieldOptions['slider'], additional?: FieldAdditional) {
  return Number as unknown as number
}

export function sliderFieldTrap(options?: any, additional?: any): SliderField {
  return { type: 'slider', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `switch` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function switchField(options?: FieldOptions['switch'], additional?: FieldAdditional) {
  return Boolean as unknown as PropType<boolean>
}

/**
 * Create a new `switch` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function switchSubfield(options?: FieldOptions['switch'], additional?: FieldAdditional) {
  return Boolean as unknown as boolean
}

export function switchFieldTrap(options?: any, additional?: any): SwitchField {
  return { type: 'switch', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `text-area` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function textAreaField(options?: FieldOptions['text-area'], additional?: FieldAdditional) {
  return String as unknown as PropType<string>
}

/**
 * Create a new `text-area` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function textAreaSubfield(options?: FieldOptions['text-area'], additional?: FieldAdditional) {
  return String as unknown as string
}

export function textAreaFieldTrap(options?: any, additional?: any): TextAreaField {
  return { type: 'text-area', options: options || {}, additional, __fromDefineProps: true } as any
}

import { vueField as textField } from '../../../node_modules/pruvious/dist/runtime/fields/standard/text.field'
export { textField }

import { vueSubfield as textSubfield } from '../../../node_modules/pruvious/dist/runtime/fields/standard/text.field'
export { textSubfield }

export function textFieldTrap(options?: any, additional?: any): TextField {
  return { type: 'text', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `time-range` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function timeRangeField(options?: FieldOptions['time-range'], additional?: FieldAdditional) {
  return Object as unknown as PropType<[number | null, number | null]>
}

/**
 * Create a new `time-range` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function timeRangeSubfield(options?: FieldOptions['time-range'], additional?: FieldAdditional) {
  return Object as unknown as [number | null, number | null]
}

export function timeRangeFieldTrap(options?: any, additional?: any): TimeRangeField {
  return { type: 'time-range', options: options || {}, additional, __fromDefineProps: true } as any
}

/**
 * Create a new `time` field in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type used to annotate a Vue `prop`.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function timeField(options?: FieldOptions['time'], additional?: FieldAdditional) {
  return Number as unknown as PropType<number | null>
}

/**
 * Create a new `time` subfield in a Vue block component.
 *
 * @param options - The field options.
 * @param additional - Additional field configurations.
 *
 * @returns The **populated** field type.
 *
 * @see https://pruvious.com/docs/creating-blocks
 */
export function timeSubfield(options?: FieldOptions['time'], additional?: FieldAdditional) {
  return Number as unknown as number | null
}

export function timeFieldTrap(options?: any, additional?: any): TimeField {
  return { type: 'time', options: options || {}, additional, __fromDefineProps: true } as any
}

import type { BlockDefinition, Slot } from '../../../node_modules/pruvious/dist/runtime/blocks/block.definition'
import { defineBlock } from '../../../node_modules/pruvious/dist/runtime/blocks/block.definition'
export { type BlockDefinition, type Slot, defineBlock }

export type BlockName = 'Preset'

export const icons = []

export type Icon = never

import type { LayoutDefinition } from '../../../node_modules/pruvious/dist/runtime/layouts/layout.definition'
export { type LayoutDefinition }

import { defineLayout } from '../../../node_modules/pruvious/dist/runtime/layouts/layout.definition'
export { defineLayout }

export type LayoutName = 'account' | 'auth' | 'checkout' | 'default' | 'dev' | 'order'

export type CollectionName = 'pages' | 'presets' | 'previews' | 'redirects' | 'roles' | 'seo' | 'uploads' | 'users'
export const collectionNames = ['pages', 'presets', 'previews', 'redirects', 'roles', 'seo', 'uploads', 'users']

export type StandardCollectionName = 'pages' | 'presets' | 'previews' | 'redirects' | 'roles' | 'seo' | 'uploads' | 'users'
export const standardCollectionNames = ['pages', 'presets', 'previews', 'redirects', 'roles', 'seo', 'uploads', 'users']

export type MultiCollectionName = 'pages' | 'presets' | 'previews' | 'roles' | 'uploads' | 'users'
export const multiCollectionNames = ['pages', 'presets', 'previews', 'roles', 'uploads', 'users']

export type SingleCollectionName = 'redirects' | 'seo'
export const singleCollectionNames = ['redirects', 'seo']

export type UploadsCollectionName = 'uploads'
export const uploadsCollectionName = 'uploads'

export type TranslatableCollectionName = 'pages' | 'presets' | 'seo'

export type SearchableCollectionName = 'pages' | 'presets' | 'roles' | 'uploads' | 'users'

export type PublicReadCollectionName = never

import type { CollectionGuard, CollectionGuardContext, CollectionSearch, ContentBuilder, DuplicateContext, FieldLayout, MirrorTranslationContext, PublicPagesOptions, ResolvedCollectionDefinition } from '../../../node_modules/pruvious/dist/runtime/collections/collection.definition'
export { type CollectionGuard, type CollectionGuardContext, type CollectionSearch, type ContentBuilder, type DuplicateContext, type FieldLayout, type MirrorTranslationContext, type PublicPagesOptions, type ResolvedCollectionDefinition }
import type { Image, ImageSource, OptimizedImage, OptimizedImageSource } from '../../../node_modules/pruvious/dist/runtime/collections/images'
export { type Image, type ImageSource, type OptimizedImage, type OptimizedImageSource }
import { defineCollection } from '../../../node_modules/pruvious/dist/runtime/collections/collection.definition'
export { defineCollection }
export type { PaginateResult } from '../../../node_modules/pruvious/dist/runtime/collections/query-builder'

export type CollectionCapability = 'collection-pages-create' | 'collection-pages-create-many' | 'collection-pages-delete' | 'collection-pages-delete-many' | 'collection-pages-read' | 'collection-pages-read-many' | 'collection-pages-update' | 'collection-pages-update-many' | 'collection-presets-create' | 'collection-presets-create-many' | 'collection-presets-delete' | 'collection-presets-delete-many' | 'collection-presets-read' | 'collection-presets-read-many' | 'collection-presets-update' | 'collection-presets-update-many' | 'collection-previews-create' | 'collection-previews-create-many' | 'collection-previews-delete' | 'collection-previews-delete-many' | 'collection-previews-read' | 'collection-previews-read-many' | 'collection-previews-update' | 'collection-previews-update-many' | 'collection-redirects-read' | 'collection-redirects-update' | 'collection-roles-create' | 'collection-roles-create-many' | 'collection-roles-delete' | 'collection-roles-delete-many' | 'collection-roles-read' | 'collection-roles-read-many' | 'collection-roles-update' | 'collection-roles-update-many' | 'collection-seo-read' | 'collection-seo-update' | 'collection-uploads-create' | 'collection-uploads-create-many' | 'collection-uploads-delete' | 'collection-uploads-delete-many' | 'collection-uploads-read' | 'collection-uploads-read-many' | 'collection-uploads-update' | 'collection-uploads-update-many' | 'collection-users-create' | 'collection-users-create-many' | 'collection-users-delete' | 'collection-users-delete-many' | 'collection-users-read' | 'collection-users-read-many' | 'collection-users-update' | 'collection-users-update-many'

export const collectionCapabilities: CollectionCapability[] = ['collection-pages-create', 'collection-pages-create-many', 'collection-pages-read', 'collection-pages-read-many', 'collection-pages-update', 'collection-pages-update-many', 'collection-pages-delete', 'collection-pages-delete-many', 'collection-presets-create', 'collection-presets-create-many', 'collection-presets-read', 'collection-presets-read-many', 'collection-presets-update', 'collection-presets-update-many', 'collection-presets-delete', 'collection-presets-delete-many', 'collection-previews-create', 'collection-previews-create-many', 'collection-previews-read', 'collection-previews-read-many', 'collection-previews-update', 'collection-previews-update-many', 'collection-previews-delete', 'collection-previews-delete-many', 'collection-redirects-read', 'collection-redirects-update', 'collection-roles-create', 'collection-roles-create-many', 'collection-roles-read', 'collection-roles-read-many', 'collection-roles-update', 'collection-roles-update-many', 'collection-roles-delete', 'collection-roles-delete-many', 'collection-seo-read', 'collection-seo-update', 'collection-uploads-create', 'collection-uploads-create-many', 'collection-uploads-read', 'collection-uploads-read-many', 'collection-uploads-update', 'collection-uploads-update-many', 'collection-uploads-delete', 'collection-uploads-delete-many', 'collection-users-create', 'collection-users-create-many', 'collection-users-read', 'collection-users-read-many', 'collection-users-update', 'collection-users-update-many', 'collection-users-delete', 'collection-users-delete-many']

export interface CollectionFieldName {
  'pages': 'baseTitle' | 'blocks' | 'createdAt' | 'description' | 'draftToken' | 'id' | 'language' | 'layout' | 'metaTags' | 'path' | 'public' | 'publishDate' | 'sharingImage' | 'title' | 'translations' | 'updatedAt' | 'visible'
  'presets': 'blocks' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'previews': 'collection' | 'createdAt' | 'data' | 'id' | 'language' | 'token' | 'translations' | 'updatedAt'
  'redirects': 'createdAt' | 'id' | 'language' | 'rules' | 'updatedAt'
  'roles': 'capabilities' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'seo': 'baseTitle' | 'baseTitlePosition' | 'baseUrl' | 'createdAt' | 'favicon' | 'id' | 'language' | 'logo' | 'metaTags' | 'scripts' | 'sharingImage' | 'socialMediaMeta' | 'titleSeparator' | 'updatedAt' | 'visible'
  'uploads': 'createdAt' | 'description' | 'directory' | 'filename' | 'height' | 'id' | 'language' | 'size' | 'translations' | 'type' | 'updatedAt' | 'width'
  'users': 'capabilities' | 'createdAt' | 'dashboardLanguage' | 'dateFormat' | 'email' | 'firstName' | 'id' | 'isActive' | 'isAdmin' | 'language' | 'lastName' | 'password' | 'role' | 'timeFormat' | 'translations' | 'updatedAt'
}

export interface MutableFieldName {
  'pages': 'baseTitle' | 'blocks' | 'description' | 'layout' | 'metaTags' | 'path' | 'public' | 'publishDate' | 'sharingImage' | 'title' | 'visible'
  'presets': 'blocks' | 'name'
  'previews': 'collection' | 'data'
  'redirects': 'rules'
  'roles': 'capabilities' | 'name'
  'seo': 'baseTitle' | 'baseTitlePosition' | 'baseUrl' | 'favicon' | 'logo' | 'metaTags' | 'scripts' | 'sharingImage' | 'socialMediaMeta' | 'titleSeparator' | 'visible'
  'uploads': 'description' | 'directory' | 'filename'
  'users': 'capabilities' | 'dashboardLanguage' | 'dateFormat' | 'email' | 'firstName' | 'isActive' | 'isAdmin' | 'lastName' | 'password' | 'role' | 'timeFormat'
}

export interface ImmutableFieldName {
  'pages': 'createdAt' | 'draftToken' | 'id' | 'language' | 'translations' | 'updatedAt'
  'presets': 'createdAt' | 'id' | 'language' | 'translations' | 'updatedAt'
  'previews': 'createdAt' | 'id' | 'language' | 'token' | 'translations' | 'updatedAt'
  'redirects': 'createdAt' | 'id' | 'language' | 'updatedAt'
  'roles': 'createdAt' | 'id' | 'language' | 'translations' | 'updatedAt'
  'seo': 'createdAt' | 'id' | 'language' | 'updatedAt'
  'uploads': 'createdAt' | 'height' | 'id' | 'language' | 'size' | 'translations' | 'type' | 'updatedAt' | 'width'
  'users': 'createdAt' | 'id' | 'language' | 'translations' | 'updatedAt'
}

export interface SelectableFieldName {
  'pages': 'baseTitle' | 'blocks' | 'createdAt' | 'description' | 'draftToken' | 'id' | 'language' | 'layout' | 'metaTags' | 'path' | 'public' | 'publishDate' | 'sharingImage' | 'title' | 'translations' | 'updatedAt' | 'visible'
  'presets': 'blocks' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'previews': 'collection' | 'createdAt' | 'data' | 'id' | 'language' | 'token' | 'translations' | 'updatedAt'
  'redirects': 'createdAt' | 'id' | 'language' | 'rules' | 'updatedAt'
  'roles': 'capabilities' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'seo': 'baseTitle' | 'baseTitlePosition' | 'baseUrl' | 'createdAt' | 'favicon' | 'id' | 'language' | 'logo' | 'metaTags' | 'scripts' | 'sharingImage' | 'socialMediaMeta' | 'titleSeparator' | 'updatedAt' | 'visible'
  'uploads': 'createdAt' | 'description' | 'directory' | 'filename' | 'height' | 'id' | 'language' | 'size' | 'translations' | 'type' | 'updatedAt' | 'width'
  'users': 'capabilities' | 'createdAt' | 'dashboardLanguage' | 'dateFormat' | 'email' | 'firstName' | 'id' | 'isActive' | 'isAdmin' | 'language' | 'lastName' | 'password' | 'role' | 'timeFormat' | 'translations' | 'updatedAt'
}

export interface FetchableFieldName {
  'pages': 'baseTitle' | 'blocks' | 'createdAt' | 'description' | 'draftToken' | 'id' | 'language' | 'layout' | 'metaTags' | 'path' | 'public' | 'publishDate' | 'sharingImage' | 'title' | 'translations' | 'updatedAt' | 'visible'
  'presets': 'blocks' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'previews': 'collection' | 'createdAt' | 'data' | 'id' | 'language' | 'token' | 'translations' | 'updatedAt'
  'redirects': 'createdAt' | 'id' | 'language' | 'rules' | 'updatedAt'
  'roles': 'capabilities' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'seo': 'baseTitle' | 'baseTitlePosition' | 'baseUrl' | 'createdAt' | 'favicon' | 'id' | 'language' | 'logo' | 'metaTags' | 'scripts' | 'sharingImage' | 'socialMediaMeta' | 'titleSeparator' | 'updatedAt' | 'visible'
  'uploads': 'createdAt' | 'description' | 'directory' | 'filename' | 'height' | 'id' | 'language' | 'size' | 'translations' | 'type' | 'updatedAt' | 'width'
  'users': 'capabilities' | 'createdAt' | 'dashboardLanguage' | 'dateFormat' | 'email' | 'firstName' | 'id' | 'isActive' | 'isAdmin' | 'language' | 'lastName' | 'role' | 'timeFormat' | 'translations' | 'updatedAt'
}

export interface Sortable {
  'pages': ':default' | 'baseTitle' | 'blocks' | 'createdAt' | 'description' | 'draftToken' | 'id' | 'language' | 'layout' | 'metaTags' | 'path' | 'public' | 'publishDate' | 'sharingImage' | 'title' | 'translations' | 'updatedAt' | 'visible'
  'presets': ':default' | 'blocks' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'previews': 'collection' | 'createdAt' | 'data' | 'id' | 'language' | 'token' | 'translations' | 'updatedAt'
  'redirects': 'createdAt' | 'id' | 'language' | 'rules' | 'updatedAt'
  'roles': ':default' | 'capabilities' | 'createdAt' | 'id' | 'language' | 'name' | 'translations' | 'updatedAt'
  'seo': 'baseTitle' | 'baseTitlePosition' | 'baseUrl' | 'createdAt' | 'favicon' | 'id' | 'language' | 'logo' | 'metaTags' | 'scripts' | 'sharingImage' | 'socialMediaMeta' | 'titleSeparator' | 'updatedAt' | 'visible'
  'uploads': ':default' | 'createdAt' | 'description' | 'directory' | 'filename' | 'height' | 'id' | 'language' | 'size' | 'translations' | 'type' | 'updatedAt' | 'width'
  'users': ':default' | 'capabilities' | 'createdAt' | 'dashboardLanguage' | 'dateFormat' | 'email' | 'firstName' | 'id' | 'isActive' | 'isAdmin' | 'language' | 'lastName' | 'password' | 'role' | 'timeFormat' | 'translations' | 'updatedAt'
}

export interface SerializedFieldType {
  'pages': {
    /**
     * The unique identifier of the page.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * The unique URL path of the page.
     * The path always begins with a slash ('/') and never ends with one (e.g., '/about').
     */
    path: string
    
    /**
     * Whether the page is publicly accessible.
     */
    public: boolean
    
    /**
     * The token that allows to access the draft version of the page. It is generated automatically and cannot be changed.
     */
    draftToken: string
    
    /**
     * Defines the document's title that is shown in a browser's title bar or a page's tab. Search engines typically display about the first 55-60 characters of a page title. Text beyond that may be lost, so try not to have titles longer than that. If you must use a longer title, make sure the important parts come earlier and that nothing critical is in the part of the title that is likely to be dropped.
     */
    title: string
    
    /**
     * Whether the base title defined in the SEO settings should be displayed together with the page title.
     */
    baseTitle: boolean
    
    /**
     * Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines.
     */
    description: string
    
    /**
     * Discourage search engines from indexing this page. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares this page link on a social network. The optimal image size is 1200 × 630 pixels. If not specified, the default sharing image defined in the SEO settings will be used.
     */
    sharingImage: string
    
    /**
     * The **<meta>** tags for this page. Values entered here will override other automatically generated meta tags.
     */
    metaTags: string
    
    /**
     * The layout to use for this page.
     */
    layout: string
    
    /**
     * The date and time when the page is published or scheduled for publication.
     */
    publishDate: number
    
    /**
     * The blocks that make up the page content.
     */
    blocks: string
    
    /**
     * The timestamp indicating when the page was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the page was last updated.
     */
    updatedAt: number
  }
  'presets': {
    /**
     * The unique identifier of the preset.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    name: string
    
    /**
     * The blocks that make up the preset content.
     */
    blocks: string
    
    /**
     * The timestamp indicating when the preset was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the preset was last updated.
     */
    updatedAt: number
  }
  'previews': {
    /**
     * The unique identifier of the preview.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    token: string
    
    /**
     * The name of the previewed collection.
     */
    collection: string
    
    /**
     * The stringified JSON data used to render the page preview.
     */
    data: string
    
    /**
     * The timestamp indicating when the preview was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the preview was last updated.
     */
    updatedAt: number
  }
  'redirects': {
    /**
     * The unique identifier of the redirect.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Redirects are applied in the specified order.
     */
    rules: string
    
    /**
     * The timestamp indicating when the redirect was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the redirect was last updated.
     */
    updatedAt: number
  }
  'roles': {
    /**
     * The unique identifier of the role.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * A unique role name.
     */
    name: string
    
    /**
     * List of capabilities assigned to this role. Users with this role inherit these capabilities.
     */
    capabilities: string
    
    /**
     * The timestamp indicating when the role was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the role was last updated.
     */
    updatedAt: number
  }
  'seo': {
    /**
     * The unique identifier of the seo.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * The base URL of the website.
     */
    baseUrl: string
    
    /**
     * Text displayed in browsers before or after the regular page title (e.g., Page Title | Base Title).
     */
    baseTitle: string
    
    /**
     * Characters used to separate the page title and base title.
     */
    titleSeparator: string
    
    /**
     * The position of the base title relative to the page title.
     */
    baseTitlePosition: string
    
    /**
     * Discourage search engines from indexing this site. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares a page link on a social network. The optimal image size is 1200 × 630 pixels.
     */
    sharingImage: string
    
    /**
     * Specify the image Google uses for your organization's logo in search results and in the Google knowledge panel.
     */
    logo: string
    
    /**
     * A small square image that appears next to the URL in a browser's address bar.
     */
    favicon: string
    
    /**
     * Whether to auto-generate **og** and **twitter** meta tags based on the current page title, description, and URL.
     */
    socialMediaMeta: boolean
    
    /**
     * The **<meta>** tags for this site. Values entered here will override other automatically generated meta tags.
     */
    metaTags: string
    
    /**
     * List of external scripts or inline JS code that can be placed in different positions on all pages of the website.
     */
    scripts: string
    
    /**
     * The timestamp indicating when the seo was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the seo was last updated.
     */
    updatedAt: number
  }
  'uploads': {
    /**
     * The unique identifier of the upload.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * The directory path.
     * Use a forward slash (`/`) to separate directory names.
     * Use an empty string (`''`) to indicate the root directory.
     */
    directory: string
    
    /**
     * The name of the file.
     */
    filename: string
    
    /**
     * The MIME type of the file.
     */
    type: string
    
    /**
     * The file size in bytes.
     */
    size: number
    
    /**
     * The image width in pixels. This field is only applicable to images.
     */
    width: number
    
    /**
     * The image height in pixels. This field is only applicable to images.
     */
    height: number
    
    /**
     * A brief description of the file.
     * The description is used as the default **alt** attribute for images.
     */
    description: string
    
    /**
     * The timestamp indicating when the upload was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the upload was last updated.
     */
    updatedAt: number
  }
  'users': {
    /**
     * The unique identifier of the user.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: string
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * Determines the user's login access to the CMS.
     */
    isActive: boolean
    
    /**
     * Administrators have all privileges within the CMS, regardless of their role and capabilities.
     */
    isAdmin: boolean
    firstName: string
    lastName: string
    email: string
    password: string
    
    /**
     * The user role defines the user's base capabilities within the CMS.
     */
    role: number
    
    /**
     * List of capabilities granted to the user in addition to their role capabilities.
     */
    capabilities: string
    
    /**
     * The preferred language for the dashboard interface.
     */
    dashboardLanguage: string
    
    /**
     * **YY** - Two-digit year (e.g. 23)
     * **YYYY** - Four-digit year (e.g. 2023)
     * **M** - The month, beginning at 1 (e.g. 1-12)
     * **MM** - The month, 2-digits (e.g. 01-12)
     * **MMM** - The abbreviated month name (e.g. Jan-Dec)
     * **MMMM** - The full month name (e.g. January-December)
     * **D** - The day of the month (e.g. 1-31)
     * **DD** - The day of the month, 2-digits (e.g. 01-31)
     * **d** - The day of the week, with Sunday as 0 (e.g. 0-6)
     * **dd** - The min name of the day of the week (e.g. Su-Sa)
     * **ddd** - The short name of the day of the week (e.g. Sun-Sat)
     * **dddd** - The name of the day of the week (e.g. Sunday-Saturday)
     * **Q** - Quarter (e.g. 1-4)
     * **Do** - Day of Month with ordinal (e.g. 1st 2nd ... 31st)
     * **w** - Week of year (e.g. 1 2 ... 52 53)
     * **ww** - Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **W** - ISO Week of year (e.g. 1 2 ... 52 53)
     * **WW** - ISO Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **wo** - Week of year with ordinal (e.g. 1st 2nd ... 52nd 53rd)
     * **[...]** - Escaped characters (e.g. [Year])
     */
    dateFormat: string
    
    /**
     * **H** - The hour (e.g. 0-23)
     * **HH** - The hour, 2-digits (e.g. 00-23)
     * **h** - The hour, 12-hour clock (e.g. 1-12)
     * **hh** - The hour, 12-hour clock, 2-digits (e.g. 01-12)
     * **m** - The minute (e.g. 0-59)
     * **mm** - The minute, 2-digits (e.g. 00-59)
     * **s** - The second (e.g. 0-59)
     * **ss** - The second, 2-digits (e.g. 00-59)
     * **SSS** - The millisecond, 3-digits (e.g. 000-999)
     * **Z** - The offset from UTC, ±HH:mm (e.g. +05:00)
     * **ZZ** - The offset from UTC, ±HHmm (e.g. +0500)
     * **A** - AM PM
     * **a** - am pm
     * **k** - The hour, beginning at 1 (e.g. 1-24)
     * **kk** - The hour, 2-digits, beginning at 1 (e.g. 01-24)
     * **z** - Abbreviated named offset (e.g. GMT+1)
     * **zzz** - Unabbreviated named offset (e.g. Central European Standard Time)
     * **[...]** - Escaped characters (e.g. [Hours])
     */
    timeFormat: string
    
    /**
     * The timestamp indicating when the user was created.
     */
    createdAt: number
    
    /**
     * The timestamp indicating when the user was last updated.
     */
    updatedAt: number
  }
}

export interface CastedFieldType {
  'pages': {
    /**
     * The unique identifier of the page.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * The unique URL path of the page.
     * The path always begins with a slash ('/') and never ends with one (e.g., '/about').
     */
    path: string
    
    /**
     * Whether the page is publicly accessible.
     */
    public: boolean
    
    /**
     * The token that allows to access the draft version of the page. It is generated automatically and cannot be changed.
     */
    draftToken: string
    
    /**
     * Defines the document's title that is shown in a browser's title bar or a page's tab. Search engines typically display about the first 55-60 characters of a page title. Text beyond that may be lost, so try not to have titles longer than that. If you must use a longer title, make sure the important parts come earlier and that nothing critical is in the part of the title that is likely to be dropped.
     */
    title: string
    
    /**
     * Whether the base title defined in the SEO settings should be displayed together with the page title.
     */
    baseTitle: boolean
    
    /**
     * Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines.
     */
    description: string
    
    /**
     * Discourage search engines from indexing this page. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares this page link on a social network. The optimal image size is 1200 × 630 pixels. If not specified, the default sharing image defined in the SEO settings will be used.
     */
    sharingImage: { uploadId: number, alt: string } | null
    
    /**
     * The **<meta>** tags for this page. Values entered here will override other automatically generated meta tags.
     */
    metaTags: {
      name: string
      content: string
    }[]

    /**
     * The layout to use for this page.
     */
    layout: 'account' | 'auth' | 'checkout' | 'default' | 'dev' | 'order' | null
    
    /**
     * The date and time when the page is published or scheduled for publication.
     */
    publishDate: number | null
    
    /**
     * The blocks that make up the page content.
     */
    blocks: {
      block: CastedBlockData
    }[]

    /**
     * The timestamp indicating when the page was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the page was last updated.
     */
    updatedAt: number | null
  }
  'presets': {
    /**
     * The unique identifier of the preset.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    name: string
    
    /**
     * The blocks that make up the preset content.
     */
    blocks: {
      block: CastedBlockData
    }[]

    /**
     * The timestamp indicating when the preset was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the preset was last updated.
     */
    updatedAt: number | null
  }
  'previews': {
    /**
     * The unique identifier of the preview.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    token: string
    
    /**
     * The name of the previewed collection.
     */
    collection: string
    
    /**
     * The stringified JSON data used to render the page preview.
     */
    data: string
    
    /**
     * The timestamp indicating when the preview was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the preview was last updated.
     */
    updatedAt: number | null
  }
  'redirects': {
    /**
     * The unique identifier of the redirect.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Redirects are applied in the specified order.
     */
    rules: {
      /**
       * Whether to use JavaScript regular expressions to match the path.
       */
      isRegExp: boolean
      
      /**
       * Whether the redirection is intended to be permanent (301) or temporary (302). Search engine robots, RSS readers, and other web crawlers will update their links to the target URL.
       */
      code: '301' | '302' | null
      
      /**
       * Whether to forward query parameters to the target URL.
       */
      forwardQueryParams: boolean
      
      /**
       * The path to match.
       */
      from: string
      
      /**
       * The JavaScript regular expression to match. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      fromRegExp: string
      
      /**
       * The target path or URL.
       */
      to: string
      
      /**
       * The target JavaScript regular expression. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      toRegExp: string
    }[]

    /**
     * The timestamp indicating when the redirect was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the redirect was last updated.
     */
    updatedAt: number | null
  }
  'roles': {
    /**
     * The unique identifier of the role.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * A unique role name.
     */
    name: string
    
    /**
     * List of capabilities assigned to this role. Users with this role inherit these capabilities.
     */
    capabilities: UserCapability[]
    
    /**
     * The timestamp indicating when the role was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the role was last updated.
     */
    updatedAt: number | null
  }
  'seo': {
    /**
     * The unique identifier of the seo.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * The base URL of the website.
     */
    baseUrl: string
    
    /**
     * Text displayed in browsers before or after the regular page title (e.g., Page Title | Base Title).
     */
    baseTitle: string
    
    /**
     * Characters used to separate the page title and base title.
     */
    titleSeparator: string
    
    /**
     * The position of the base title relative to the page title.
     */
    baseTitlePosition: 'after' | 'before' | null
    
    /**
     * Discourage search engines from indexing this site. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares a page link on a social network. The optimal image size is 1200 × 630 pixels.
     */
    sharingImage: { uploadId: number, alt: string } | null
    
    /**
     * Specify the image Google uses for your organization's logo in search results and in the Google knowledge panel.
     */
    logo: { uploadId: number, alt: string } | null
    
    /**
     * A small square image that appears next to the URL in a browser's address bar.
     */
    favicon: { uploadId: number, alt: string } | null
    
    /**
     * Whether to auto-generate **og** and **twitter** meta tags based on the current page title, description, and URL.
     */
    socialMediaMeta: boolean
    
    /**
     * The **<meta>** tags for this site. Values entered here will override other automatically generated meta tags.
     */
    metaTags: {
      /**
       * The name of the meta tag.
       */
      name: string
      
      /**
       * The content of the meta tag.
       */
      content: string
    }[]

    /**
     * List of external scripts or inline JS code that can be placed in different positions on all pages of the website.
     */
    scripts: {
      kind: 'external' | 'inline' | null
      url: string
      js: string
      position: 'bodyClose' | 'bodyOpen' | 'head' | null
    }[]

    /**
     * The timestamp indicating when the seo was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the seo was last updated.
     */
    updatedAt: number | null
  }
  'uploads': {
    /**
     * The unique identifier of the upload.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * The directory path.
     * Use a forward slash (`/`) to separate directory names.
     * Use an empty string (`''`) to indicate the root directory.
     */
    directory: string
    
    /**
     * The name of the file.
     */
    filename: string
    
    /**
     * The MIME type of the file.
     */
    type: string
    
    /**
     * The file size in bytes.
     */
    size: number
    
    /**
     * The image width in pixels. This field is only applicable to images.
     */
    width: number
    
    /**
     * The image height in pixels. This field is only applicable to images.
     */
    height: number
    
    /**
     * A brief description of the file.
     * The description is used as the default **alt** attribute for images.
     */
    description: string
    
    /**
     * The timestamp indicating when the upload was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the upload was last updated.
     */
    updatedAt: number | null
  }
  'users': {
    /**
     * The unique identifier of the user.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: string
    
    /**
     * Determines the user's login access to the CMS.
     */
    isActive: boolean
    
    /**
     * Administrators have all privileges within the CMS, regardless of their role and capabilities.
     */
    isAdmin: boolean
    firstName: string
    lastName: string
    email: string
    password: string
    
    /**
     * The user role defines the user's base capabilities within the CMS.
     */
    role: number | null
    
    /**
     * List of capabilities granted to the user in addition to their role capabilities.
     */
    capabilities: UserCapability[]
    
    /**
     * The preferred language for the dashboard interface.
     */
    dashboardLanguage: 'en' | null
    
    /**
     * **YY** - Two-digit year (e.g. 23)
     * **YYYY** - Four-digit year (e.g. 2023)
     * **M** - The month, beginning at 1 (e.g. 1-12)
     * **MM** - The month, 2-digits (e.g. 01-12)
     * **MMM** - The abbreviated month name (e.g. Jan-Dec)
     * **MMMM** - The full month name (e.g. January-December)
     * **D** - The day of the month (e.g. 1-31)
     * **DD** - The day of the month, 2-digits (e.g. 01-31)
     * **d** - The day of the week, with Sunday as 0 (e.g. 0-6)
     * **dd** - The min name of the day of the week (e.g. Su-Sa)
     * **ddd** - The short name of the day of the week (e.g. Sun-Sat)
     * **dddd** - The name of the day of the week (e.g. Sunday-Saturday)
     * **Q** - Quarter (e.g. 1-4)
     * **Do** - Day of Month with ordinal (e.g. 1st 2nd ... 31st)
     * **w** - Week of year (e.g. 1 2 ... 52 53)
     * **ww** - Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **W** - ISO Week of year (e.g. 1 2 ... 52 53)
     * **WW** - ISO Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **wo** - Week of year with ordinal (e.g. 1st 2nd ... 52nd 53rd)
     * **[...]** - Escaped characters (e.g. [Year])
     */
    dateFormat: string
    
    /**
     * **H** - The hour (e.g. 0-23)
     * **HH** - The hour, 2-digits (e.g. 00-23)
     * **h** - The hour, 12-hour clock (e.g. 1-12)
     * **hh** - The hour, 12-hour clock, 2-digits (e.g. 01-12)
     * **m** - The minute (e.g. 0-59)
     * **mm** - The minute, 2-digits (e.g. 00-59)
     * **s** - The second (e.g. 0-59)
     * **ss** - The second, 2-digits (e.g. 00-59)
     * **SSS** - The millisecond, 3-digits (e.g. 000-999)
     * **Z** - The offset from UTC, ±HH:mm (e.g. +05:00)
     * **ZZ** - The offset from UTC, ±HHmm (e.g. +0500)
     * **A** - AM PM
     * **a** - am pm
     * **k** - The hour, beginning at 1 (e.g. 1-24)
     * **kk** - The hour, 2-digits, beginning at 1 (e.g. 01-24)
     * **z** - Abbreviated named offset (e.g. GMT+1)
     * **zzz** - Unabbreviated named offset (e.g. Central European Standard Time)
     * **[...]** - Escaped characters (e.g. [Hours])
     */
    timeFormat: string
    
    /**
     * The timestamp indicating when the user was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the user was last updated.
     */
    updatedAt: number | null
  }
}

export interface PopulatedFieldType {
  'pages': {
    /**
     * The unique identifier of the page.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    
    /**
     * The unique URL path of the page.
     * The path always begins with a slash ('/') and never ends with one (e.g., '/about').
     */
    path: string
    
    /**
     * Whether the page is publicly accessible.
     */
    public: boolean
    
    /**
     * The token that allows to access the draft version of the page. It is generated automatically and cannot be changed.
     */
    draftToken: string
    
    /**
     * Defines the document's title that is shown in a browser's title bar or a page's tab. Search engines typically display about the first 55-60 characters of a page title. Text beyond that may be lost, so try not to have titles longer than that. If you must use a longer title, make sure the important parts come earlier and that nothing critical is in the part of the title that is likely to be dropped.
     */
    title: string
    
    /**
     * Whether the base title defined in the SEO settings should be displayed together with the page title.
     */
    baseTitle: boolean
    
    /**
     * Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines.
     */
    description: string
    
    /**
     * Discourage search engines from indexing this page. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares this page link on a social network. The optimal image size is 1200 × 630 pixels. If not specified, the default sharing image defined in the SEO settings will be used.
     */
    sharingImage: Image | null
    
    /**
     * The **<meta>** tags for this page. Values entered here will override other automatically generated meta tags.
     */
    metaTags: {
      name: string
      content: string
    }[]

    /**
     * The layout to use for this page.
     */
    layout: 'account' | 'auth' | 'checkout' | 'default' | 'dev' | 'order' | null
    
    /**
     * The date and time when the page is published or scheduled for publication.
     */
    publishDate: number | null
    
    /**
     * The blocks that make up the page content.
     */
    blocks: {
      block: PopulatedBlockData
    }[]

    /**
     * The timestamp indicating when the page was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the page was last updated.
     */
    updatedAt: number | null
  }
  'presets': {
    /**
     * The unique identifier of the preset.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    name: string
    
    /**
     * The blocks that make up the preset content.
     */
    blocks: {
      block: PopulatedBlockData
    }[]

    /**
     * The timestamp indicating when the preset was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the preset was last updated.
     */
    updatedAt: number | null
  }
  'previews': {
    /**
     * The unique identifier of the preview.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    token: string
    
    /**
     * The name of the previewed collection.
     */
    collection: string
    
    /**
     * The stringified JSON data used to render the page preview.
     */
    data: string
    
    /**
     * The timestamp indicating when the preview was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the preview was last updated.
     */
    updatedAt: number | null
  }
  'redirects': {
    /**
     * The unique identifier of the redirect.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Redirects are applied in the specified order.
     */
    rules: {
      /**
       * Whether to use JavaScript regular expressions to match the path.
       */
      isRegExp: boolean
      
      /**
       * Whether the redirection is intended to be permanent (301) or temporary (302). Search engine robots, RSS readers, and other web crawlers will update their links to the target URL.
       */
      code: '301' | '302' | null
      
      /**
       * Whether to forward query parameters to the target URL.
       */
      forwardQueryParams: boolean
      
      /**
       * The path to match.
       */
      from: string
      
      /**
       * The JavaScript regular expression to match. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      fromRegExp: string
      
      /**
       * The target path or URL.
       */
      to: string
      
      /**
       * The target JavaScript regular expression. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      toRegExp: string
    }[]

    /**
     * The timestamp indicating when the redirect was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the redirect was last updated.
     */
    updatedAt: number | null
  }
  'roles': {
    /**
     * The unique identifier of the role.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    
    /**
     * A unique role name.
     */
    name: string
    
    /**
     * List of capabilities assigned to this role. Users with this role inherit these capabilities.
     */
    capabilities: UserCapability[]
    
    /**
     * The timestamp indicating when the role was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the role was last updated.
     */
    updatedAt: number | null
  }
  'seo': {
    /**
     * The unique identifier of the seo.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * The base URL of the website.
     */
    baseUrl: string
    
    /**
     * Text displayed in browsers before or after the regular page title (e.g., Page Title | Base Title).
     */
    baseTitle: string
    
    /**
     * Characters used to separate the page title and base title.
     */
    titleSeparator: string
    
    /**
     * The position of the base title relative to the page title.
     */
    baseTitlePosition: 'after' | 'before' | null
    
    /**
     * Discourage search engines from indexing this site. It is up to search engines to honor this request.
     */
    visible: boolean
    
    /**
     * An image that appears when someone shares a page link on a social network. The optimal image size is 1200 × 630 pixels.
     */
    sharingImage: Image | null
    
    /**
     * Specify the image Google uses for your organization's logo in search results and in the Google knowledge panel.
     */
    logo: Image | null
    
    /**
     * A small square image that appears next to the URL in a browser's address bar.
     */
    favicon: Image | null
    
    /**
     * Whether to auto-generate **og** and **twitter** meta tags based on the current page title, description, and URL.
     */
    socialMediaMeta: boolean
    
    /**
     * The **<meta>** tags for this site. Values entered here will override other automatically generated meta tags.
     */
    metaTags: {
      /**
       * The name of the meta tag.
       */
      name: string
      
      /**
       * The content of the meta tag.
       */
      content: string
    }[]

    /**
     * List of external scripts or inline JS code that can be placed in different positions on all pages of the website.
     */
    scripts: {
      kind: 'external' | 'inline' | null
      url: string
      js: string
      position: 'bodyClose' | 'bodyOpen' | 'head' | null
    }[]

    /**
     * The timestamp indicating when the seo was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the seo was last updated.
     */
    updatedAt: number | null
  }
  'uploads': {
    /**
     * The unique identifier of the upload.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    
    /**
     * The directory path.
     * Use a forward slash (`/`) to separate directory names.
     * Use an empty string (`''`) to indicate the root directory.
     */
    directory: string
    
    /**
     * The name of the file.
     */
    filename: string
    
    /**
     * The MIME type of the file.
     */
    type: string
    
    /**
     * The file size in bytes.
     */
    size: number
    
    /**
     * The image width in pixels. This field is only applicable to images.
     */
    width: number
    
    /**
     * The image height in pixels. This field is only applicable to images.
     */
    height: number
    
    /**
     * A brief description of the file.
     * The description is used as the default **alt** attribute for images.
     */
    description: string
    
    /**
     * The timestamp indicating when the upload was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the upload was last updated.
     */
    updatedAt: number | null
  }
  'users': {
    /**
     * The unique identifier of the user.
     */
    id: number
    
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations: Record<SupportedLanguage, number | null> | null
    
    /**
     * Determines the user's login access to the CMS.
     */
    isActive: boolean
    
    /**
     * Administrators have all privileges within the CMS, regardless of their role and capabilities.
     */
    isAdmin: boolean
    firstName: string
    lastName: string
    email: string
    password: string
    
    /**
     * The user role defines the user's base capabilities within the CMS.
     */
    role: Pick<PopulatedFieldType['roles'], 'capabilities' | 'id' | 'name'> | null
    
    /**
     * List of capabilities granted to the user in addition to their role capabilities.
     */
    capabilities: UserCapability[]
    
    /**
     * The preferred language for the dashboard interface.
     */
    dashboardLanguage: 'en' | null
    
    /**
     * **YY** - Two-digit year (e.g. 23)
     * **YYYY** - Four-digit year (e.g. 2023)
     * **M** - The month, beginning at 1 (e.g. 1-12)
     * **MM** - The month, 2-digits (e.g. 01-12)
     * **MMM** - The abbreviated month name (e.g. Jan-Dec)
     * **MMMM** - The full month name (e.g. January-December)
     * **D** - The day of the month (e.g. 1-31)
     * **DD** - The day of the month, 2-digits (e.g. 01-31)
     * **d** - The day of the week, with Sunday as 0 (e.g. 0-6)
     * **dd** - The min name of the day of the week (e.g. Su-Sa)
     * **ddd** - The short name of the day of the week (e.g. Sun-Sat)
     * **dddd** - The name of the day of the week (e.g. Sunday-Saturday)
     * **Q** - Quarter (e.g. 1-4)
     * **Do** - Day of Month with ordinal (e.g. 1st 2nd ... 31st)
     * **w** - Week of year (e.g. 1 2 ... 52 53)
     * **ww** - Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **W** - ISO Week of year (e.g. 1 2 ... 52 53)
     * **WW** - ISO Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **wo** - Week of year with ordinal (e.g. 1st 2nd ... 52nd 53rd)
     * **[...]** - Escaped characters (e.g. [Year])
     */
    dateFormat: string
    
    /**
     * **H** - The hour (e.g. 0-23)
     * **HH** - The hour, 2-digits (e.g. 00-23)
     * **h** - The hour, 12-hour clock (e.g. 1-12)
     * **hh** - The hour, 12-hour clock, 2-digits (e.g. 01-12)
     * **m** - The minute (e.g. 0-59)
     * **mm** - The minute, 2-digits (e.g. 00-59)
     * **s** - The second (e.g. 0-59)
     * **ss** - The second, 2-digits (e.g. 00-59)
     * **SSS** - The millisecond, 3-digits (e.g. 000-999)
     * **Z** - The offset from UTC, ±HH:mm (e.g. +05:00)
     * **ZZ** - The offset from UTC, ±HHmm (e.g. +0500)
     * **A** - AM PM
     * **a** - am pm
     * **k** - The hour, beginning at 1 (e.g. 1-24)
     * **kk** - The hour, 2-digits, beginning at 1 (e.g. 01-24)
     * **z** - Abbreviated named offset (e.g. GMT+1)
     * **zzz** - Unabbreviated named offset (e.g. Central European Standard Time)
     * **[...]** - Escaped characters (e.g. [Hours])
     */
    timeFormat: string
    
    /**
     * The timestamp indicating when the user was created.
     */
    createdAt: number | null
    
    /**
     * The timestamp indicating when the user was last updated.
     */
    updatedAt: number | null
  }
}

export interface CreateInput {
  'pages': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    
    /**
     * The unique URL path of the page.
     * The path always begins with a slash ('/') and never ends with one (e.g., '/about').
     */
    path: string
    
    /**
     * Whether the page is publicly accessible.
     */
    public?: Booleanish
    
    /**
     * The token that allows to access the draft version of the page. It is generated automatically and cannot be changed.
     */
    draftToken?: string
    
    /**
     * Defines the document's title that is shown in a browser's title bar or a page's tab. Search engines typically display about the first 55-60 characters of a page title. Text beyond that may be lost, so try not to have titles longer than that. If you must use a longer title, make sure the important parts come earlier and that nothing critical is in the part of the title that is likely to be dropped.
     */
    title?: string
    
    /**
     * Whether the base title defined in the SEO settings should be displayed together with the page title.
     */
    baseTitle?: Booleanish
    
    /**
     * Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines.
     */
    description?: string
    
    /**
     * Discourage search engines from indexing this page. It is up to search engines to honor this request.
     */
    visible?: Booleanish
    
    /**
     * An image that appears when someone shares this page link on a social network. The optimal image size is 1200 × 630 pixels. If not specified, the default sharing image defined in the SEO settings will be used.
     */
    sharingImage?: { uploadId: number, alt: string } | number | null
    
    /**
     * The **<meta>** tags for this page. Values entered here will override other automatically generated meta tags.
     */
    metaTags?: {
      name: string
      content: string
    }[]

    /**
     * The layout to use for this page.
     */
    layout?: 'account' | 'auth' | 'checkout' | 'default' | 'dev' | 'order' | null
    
    /**
     * The date and time when the page is published or scheduled for publication.
     */
    publishDate?: number | null
    
    /**
     * The blocks that make up the page content.
     */
    blocks?: {
      block: BlockInputData
    }[]

    /**
     * The timestamp indicating when the page was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the page was last updated.
     */
    updatedAt?: number | null
  }
  'presets': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    name: string
    
    /**
     * The blocks that make up the preset content.
     */
    blocks?: {
      block: BlockInputData
    }[]

    /**
     * The timestamp indicating when the preset was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the preset was last updated.
     */
    updatedAt?: number | null
  }
  'previews': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    token: string
    
    /**
     * The name of the previewed collection.
     */
    collection: string
    
    /**
     * The stringified JSON data used to render the page preview.
     */
    data: string
    
    /**
     * The timestamp indicating when the preview was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the preview was last updated.
     */
    updatedAt?: number | null
  }
  'redirects': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Redirects are applied in the specified order.
     */
    rules?: {
      /**
       * Whether to use JavaScript regular expressions to match the path.
       */
      isRegExp: Booleanish
      
      /**
       * Whether the redirection is intended to be permanent (301) or temporary (302). Search engine robots, RSS readers, and other web crawlers will update their links to the target URL.
       */
      code: '301' | '302' | null
      
      /**
       * Whether to forward query parameters to the target URL.
       */
      forwardQueryParams: Booleanish
      
      /**
       * The path to match.
       */
      from: string
      
      /**
       * The JavaScript regular expression to match. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      fromRegExp: string
      
      /**
       * The target path or URL.
       */
      to: string
      
      /**
       * The target JavaScript regular expression. You can use indexed capture groups in **$n** format to replace parts of the target URL.
       */
      toRegExp: string
    }[]

    /**
     * The timestamp indicating when the redirect was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the redirect was last updated.
     */
    updatedAt?: number | null
  }
  'roles': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    
    /**
     * A unique role name.
     */
    name: string
    
    /**
     * List of capabilities assigned to this role. Users with this role inherit these capabilities.
     */
    capabilities?: UserCapability[]
    
    /**
     * The timestamp indicating when the role was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the role was last updated.
     */
    updatedAt?: number | null
  }
  'seo': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * The base URL of the website.
     */
    baseUrl?: string
    
    /**
     * Text displayed in browsers before or after the regular page title (e.g., Page Title | Base Title).
     */
    baseTitle?: string
    
    /**
     * Characters used to separate the page title and base title.
     */
    titleSeparator?: string
    
    /**
     * The position of the base title relative to the page title.
     */
    baseTitlePosition?: 'after' | 'before' | null
    
    /**
     * Discourage search engines from indexing this site. It is up to search engines to honor this request.
     */
    visible?: Booleanish
    
    /**
     * An image that appears when someone shares a page link on a social network. The optimal image size is 1200 × 630 pixels.
     */
    sharingImage?: { uploadId: number, alt: string } | number | null
    
    /**
     * Specify the image Google uses for your organization's logo in search results and in the Google knowledge panel.
     */
    logo?: { uploadId: number, alt: string } | number | null
    
    /**
     * A small square image that appears next to the URL in a browser's address bar.
     */
    favicon?: { uploadId: number, alt: string } | number | null
    
    /**
     * Whether to auto-generate **og** and **twitter** meta tags based on the current page title, description, and URL.
     */
    socialMediaMeta?: Booleanish
    
    /**
     * The **<meta>** tags for this site. Values entered here will override other automatically generated meta tags.
     */
    metaTags?: {
      /**
       * The name of the meta tag.
       */
      name: string
      
      /**
       * The content of the meta tag.
       */
      content: string
    }[]

    /**
     * List of external scripts or inline JS code that can be placed in different positions on all pages of the website.
     */
    scripts?: {
      kind: 'external' | 'inline' | null
      url: string
      js: string
      position: 'bodyClose' | 'bodyOpen' | 'head' | null
    }[]

    /**
     * The timestamp indicating when the seo was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the seo was last updated.
     */
    updatedAt?: number | null
  }
  'uploads': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    
    /**
     * The directory path.
     * Use a forward slash (`/`) to separate directory names.
     * Use an empty string (`''`) to indicate the root directory.
     */
    directory?: string
    
    /**
     * The name of the file.
     */
    filename?: string
    
    /**
     * The MIME type of the file.
     */
    type?: string
    
    /**
     * The file size in bytes.
     */
    size?: number
    
    /**
     * The image width in pixels. This field is only applicable to images.
     */
    width?: number
    
    /**
     * The image height in pixels. This field is only applicable to images.
     */
    height?: number
    
    /**
     * A brief description of the file.
     * The description is used as the default **alt** attribute for images.
     */
    description?: string
    
    /**
     * The timestamp indicating when the upload was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the upload was last updated.
     */
    updatedAt?: number | null
    
    /**
     * Represents a `File` to upload and associate with the current input.
     */
    $file: File
  }
  'users': {
    /**
     * The language code associated with this collection record.
     *
     * If not provided, the code of the primary language will be used.
     */
    language?: 'en' | null
    
    /**
     * Represents a unique identifier that groups records as translations of each other.
     * When populated, this field resolves to a key-value object.
     * The key represents he language code, and the value is the corresponding record's ID or `null` if no record in this language exists.
     *
     * If the collection is not translatable, the populated value is `null`.
     *
     * Defaults to an automatically generated unique string.
     */
    translations?: string
    
    /**
     * Determines the user's login access to the CMS.
     */
    isActive?: Booleanish
    
    /**
     * Administrators have all privileges within the CMS, regardless of their role and capabilities.
     */
    isAdmin?: Booleanish
    firstName?: string
    lastName?: string
    email: string
    password: string
    
    /**
     * The user role defines the user's base capabilities within the CMS.
     */
    role?: number | null
    
    /**
     * List of capabilities granted to the user in addition to their role capabilities.
     */
    capabilities?: UserCapability[]
    
    /**
     * The preferred language for the dashboard interface.
     */
    dashboardLanguage: 'en' | null
    
    /**
     * **YY** - Two-digit year (e.g. 23)
     * **YYYY** - Four-digit year (e.g. 2023)
     * **M** - The month, beginning at 1 (e.g. 1-12)
     * **MM** - The month, 2-digits (e.g. 01-12)
     * **MMM** - The abbreviated month name (e.g. Jan-Dec)
     * **MMMM** - The full month name (e.g. January-December)
     * **D** - The day of the month (e.g. 1-31)
     * **DD** - The day of the month, 2-digits (e.g. 01-31)
     * **d** - The day of the week, with Sunday as 0 (e.g. 0-6)
     * **dd** - The min name of the day of the week (e.g. Su-Sa)
     * **ddd** - The short name of the day of the week (e.g. Sun-Sat)
     * **dddd** - The name of the day of the week (e.g. Sunday-Saturday)
     * **Q** - Quarter (e.g. 1-4)
     * **Do** - Day of Month with ordinal (e.g. 1st 2nd ... 31st)
     * **w** - Week of year (e.g. 1 2 ... 52 53)
     * **ww** - Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **W** - ISO Week of year (e.g. 1 2 ... 52 53)
     * **WW** - ISO Week of year, 2-digits (e.g. 01 02 ... 52 53)
     * **wo** - Week of year with ordinal (e.g. 1st 2nd ... 52nd 53rd)
     * **[...]** - Escaped characters (e.g. [Year])
     */
    dateFormat: string
    
    /**
     * **H** - The hour (e.g. 0-23)
     * **HH** - The hour, 2-digits (e.g. 00-23)
     * **h** - The hour, 12-hour clock (e.g. 1-12)
     * **hh** - The hour, 12-hour clock, 2-digits (e.g. 01-12)
     * **m** - The minute (e.g. 0-59)
     * **mm** - The minute, 2-digits (e.g. 00-59)
     * **s** - The second (e.g. 0-59)
     * **ss** - The second, 2-digits (e.g. 00-59)
     * **SSS** - The millisecond, 3-digits (e.g. 000-999)
     * **Z** - The offset from UTC, ±HH:mm (e.g. +05:00)
     * **ZZ** - The offset from UTC, ±HHmm (e.g. +0500)
     * **A** - AM PM
     * **a** - am pm
     * **k** - The hour, beginning at 1 (e.g. 1-24)
     * **kk** - The hour, 2-digits, beginning at 1 (e.g. 01-24)
     * **z** - Abbreviated named offset (e.g. GMT+1)
     * **zzz** - Unabbreviated named offset (e.g. Central European Standard Time)
     * **[...]** - Escaped characters (e.g. [Hours])
     */
    timeFormat: string
    
    /**
     * The timestamp indicating when the user was created.
     */
    createdAt?: number | null
    
    /**
     * The timestamp indicating when the user was last updated.
     */
    updatedAt?: number | null
  }
}

export interface UpdateInput {
  'pages': Omit<Partial<CreateInput['pages']>, ImmutableFieldName['pages']>
  'presets': Omit<Partial<CreateInput['presets']>, ImmutableFieldName['presets']>
  'previews': Omit<Partial<CreateInput['previews']>, ImmutableFieldName['previews']>
  'redirects': Omit<Partial<CreateInput['redirects']>, ImmutableFieldName['redirects']>
  'roles': Omit<Partial<CreateInput['roles']>, ImmutableFieldName['roles']>
  'seo': Omit<Partial<CreateInput['seo']>, ImmutableFieldName['seo']>
  'uploads': Omit<Partial<CreateInput['uploads']>, ImmutableFieldName['uploads']>
  'users': Omit<Partial<CreateInput['users']>, ImmutableFieldName['users']>
}

export interface CollectionSearchStructure {
  'pages': 'default'
  'presets': 'default'
  'previews': unknown
  'redirects': unknown
  'roles': 'default'
  'seo': unknown
  'uploads': 'default'
  'users': 'default'
}

import { defineHook } from '../../../node_modules/pruvious/dist/runtime/hooks/hook.definition'
export { defineHook }

import type { JobDefinition, JobProcessContext, JobAfterProcessContext, ResolvedJobDefinition } from '../../../node_modules/pruvious/dist/runtime/jobs/job.definition'
export {  type JobDefinition, type JobProcessContext, type JobAfterProcessContext, type ResolvedJobDefinition }
import { defineJob } from '../../../node_modules/pruvious/dist/runtime/jobs/job.definition'
export { defineJob }

import type { DashboardPageDefinition, ResolvedDashboardPageDefinition } from '../../../node_modules/pruvious/dist/runtime/dashboard/dashboard.definition'
export { type DashboardPageDefinition, type ResolvedDashboardPageDefinition }
import { defineDashboardPage } from '../../../node_modules/pruvious/dist/runtime/dashboard/dashboard.definition'
export { defineDashboardPage }

export type BlockInputData = {
  /**
   * The block name.
   */
  name: 'Preset'

  /**
   * The block fields.
   */
  fields: {
    /**
     * This block is swapped with blocks from the selected preset.
     */
    preset: number | null
  }

  /**
   * The block slots.
   */
  slots?: {}
}

export type CastedBlockData = {
  /**
   * The block name.
   */
  name: 'Preset'

  /**
   * The block fields.
   */
  fields: {
    /**
     * This block is swapped with blocks from the selected preset.
     */
    preset: number | null
  }

  /**
   * The block slots.
   */
  slots?: {}
}

export type PopulatedBlockData = {
  /**
   * The block name.
   */
  name: 'Preset'

  /**
   * The block fields.
   */
  fields: {
    /**
     * This block is swapped with blocks from the selected preset.
     */
    preset: Pick<PopulatedFieldType['presets'], 'blocks'> | null
  }

  /**
   * The block slots.
   */
  slots?: {}
}

export const userCapabilities: UserCapability[] = ['access-dashboard', 'clear-cache', 'update-profile', ...collectionCapabilities]

export const layouts: Pick<LayoutDefinition, 'name' | 'label'>[] = [{ name: 'default', label: 'Default' }, { name: 'account', label: 'Account' }, { name: 'auth', label: 'Auth' }, { name: 'checkout', label: 'Checkout' }, { name: 'dev', label: 'Dev' }, { name: 'order', label: 'Order' }]

export type PruviousIcon = '24Hours' | '2fa' | '360' | '3dCubeSphere' | 'AB' | 'AB2' | 'Abacus' | 'Abc' | 'AccessPoint' | 'Accessible' | 'AddressBook' | 'Adjustments' | 'AdjustmentsHorizontal' | 'AerialLift' | 'Alarm' | 'Album' | 'AlertTriangle' | 'AlignCenter' | 'AlignJustified' | 'AlignLeft' | 'AlignRight' | 'Analyze' | 'Anchor' | 'Angle' | 'Api' | 'AppWindow' | 'Apple' | 'Apps' | 'Archive' | 'ArrowBack' | 'ArrowBackUp' | 'ArrowBounce' | 'ArrowDown' | 'ArrowForwardUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowsHorizontal' | 'ArrowsMaximize' | 'ArrowsSort' | 'Article' | 'AspectRatio' | 'Atom' | 'Award' | 'Axe' | 'Backpack' | 'Badge3d' | 'Badge4k' | 'BadgeAd' | 'BadgeHd' | 'Ballpen' | 'Ban' | 'Basket' | 'Bell' | 'Bluetooth' | 'Bold' | 'Bolt' | 'Book' | 'Bookmark' | 'Box' | 'BoxMultiple' | 'Briefcase' | 'Browser' | 'Brush' | 'Bucket' | 'Bug' | 'Building' | 'BuildingFactory' | 'BuildingStore' | 'Bulb' | 'Bus' | 'Cake' | 'Calculator' | 'Calendar' | 'CalendarEvent' | 'Camera' | 'Capture' | 'Car' | 'Cards' | 'Cash' | 'Cast' | 'Cat' | 'Category' | 'Certificate' | 'ChartBar' | 'ChartDots' | 'ChartPie' | 'Check' | 'Checkbox' | 'Checklist' | 'ChefHat' | 'ChevronDown' | 'ChevronLeft' | 'ChevronRight' | 'ChevronUp' | 'CirclePlus' | 'Circles' | 'ClearAll' | 'ClearFormatting' | 'Click' | 'Clipboard' | 'ClipboardCopy' | 'Clock' | 'Cloud' | 'CloudComputing' | 'Code' | 'CodeCircle' | 'CodeDots' | 'CodePlus' | 'Coffee' | 'Coin' | 'Coins' | 'Command' | 'Compass' | 'Components' | 'Contrast' | 'Cookie' | 'Copy' | 'Copyright' | 'Cpu' | 'CreditCard' | 'Crop' | 'Cup' | 'CurrencyCent' | 'CurrencyDollar' | 'CurrencyEuro' | 'CurrentLocation' | 'Cut' | 'Cylinder' | 'Database' | 'DatabaseExport' | 'DatabaseImport' | 'Delta' | 'DeviceDesktop' | 'DeviceFloppy' | 'DeviceGamepad' | 'DeviceIpad' | 'DeviceMobile' | 'DeviceNintendo' | 'DeviceSdCard' | 'DeviceTablet' | 'DeviceTv' | 'DeviceWatch' | 'Devices' | 'Devices2' | 'Dialpad' | 'Diamond' | 'Dice' | 'Disabled' | 'Disc' | 'Discount' | 'DiscountCheck' | 'Dog' | 'Door' | 'DotsVertical' | 'Download' | 'Droplet' | 'EPassport' | 'Edit' | 'Egg' | 'Eraser' | 'ExclamationCircle' | 'ExternalLink' | 'Eye' | 'EyeOff' | 'Eyeglass' | 'File' | 'FileCertificate' | 'FilePlus' | 'FileSearch' | 'FileSpreadsheet' | 'FileText' | 'FileZip' | 'Files' | 'Filter' | 'FilterOff' | 'Fingerprint' | 'Fish' | 'Flag' | 'Flare' | 'Flask' | 'Focus' | 'FocusCentered' | 'Folder' | 'FolderPlus' | 'Forms' | 'Frame' | 'GasStation' | 'Glass' | 'Globe' | 'Gps' | 'Graph' | 'GridDots' | 'GripVertical' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Heading' | 'Headphones' | 'Headset' | 'Heart' | 'Help' | 'Highlight' | 'History' | 'Home' | 'Id' | 'Inbox' | 'InputSearch' | 'Italic' | 'Key' | 'Keyboard' | 'Keyframes' | 'Language' | 'LanguageOff' | 'LayersDifference' | 'LayersIntersect' | 'LayersLinked' | 'LayersSubtract' | 'LayersUnion' | 'Layout' | 'LayoutAlignBottom' | 'LayoutAlignCenter' | 'LayoutAlignLeft' | 'LayoutAlignMiddle' | 'LayoutAlignRight' | 'LayoutAlignTop' | 'LayoutBottombar' | 'LayoutCards' | 'LayoutColumns' | 'LayoutDistributeHorizontal' | 'LayoutDistributeVertical' | 'LayoutGridAdd' | 'LayoutList' | 'LayoutRows' | 'LayoutSidebar' | 'LayoutSidebarRight' | 'Leaf' | 'Link' | 'List' | 'ListNumbers' | 'Loader2' | 'Location' | 'Login' | 'Logout' | 'Mail' | 'MailOpened' | 'Map' | 'MapPin' | 'Maximize' | 'Message' | 'MessageCircle' | 'Messages' | 'Microphone' | 'Minimize' | 'Moon' | 'Mountain' | 'Mouse' | 'Movie' | 'Mug' | 'Network' | 'News' | 'Note' | 'Notebook' | 'Notes' | 'Notification' | 'Outlet' | 'Package' | 'Paint' | 'Palette' | 'Paperclip' | 'Parking' | 'Paw' | 'Pencil' | 'Pennant' | 'Perspective' | 'Phone' | 'Photo' | 'PictureInPicture' | 'Pin' | 'Placeholder' | 'Plane' | 'Planet' | 'Plant' | 'PlayCard' | 'PlayerPause' | 'PlayerPlay' | 'Playlist' | 'Plug' | 'Plus' | 'Pointer' | 'Power' | 'Presentation' | 'Printer' | 'Puzzle' | 'Qrcode' | 'Quote' | 'Radio' | 'Rainbow' | 'Receipt' | 'Recycle' | 'Refresh' | 'Registered' | 'Repeat' | 'Report' | 'ReportSearch' | 'Resize' | 'Ripple' | 'Road' | 'RoadSign' | 'Robot' | 'Rocket' | 'Rotate' | 'RulerMeasure' | 'Scale' | 'Screenshot' | 'Script' | 'Search' | 'Section' | 'Seeding' | 'Send' | 'SeparatorHorizontal' | 'Server' | 'Server2' | 'Settings' | 'Settings2' | 'Shape' | 'Share' | 'Shield' | 'ShieldLock' | 'Shirt' | 'Shoe' | 'ShoppingBag' | 'ShoppingCart' | 'Slice' | 'SortAscending' | 'SortAscendingLetters' | 'SortAscendingNumbers' | 'SortDescending' | 'SortDescendingLetters' | 'SortDescendingNumbers' | 'Soup' | 'Spade' | 'Spy' | 'Square' | 'SquareOff' | 'Stack' | 'Stack2' | 'Stack3' | 'Stairs' | 'Star' | 'StarHalf' | 'Sticker' | 'Strikethrough' | 'Subscript' | 'Sun' | 'Superscript' | 'Sword' | 'Swords' | 'Table' | 'TableExport' | 'TableImport' | 'Tag' | 'Tags' | 'Target' | 'Telescope' | 'Terminal' | 'ThumbDown' | 'ThumbUp' | 'Ticket' | 'Timeline' | 'Tool' | 'Tools' | 'Track' | 'TrafficLights' | 'Transform' | 'Trash' | 'Tree' | 'Trees' | 'Typography' | 'Umbrella' | 'Underline' | 'Unlink' | 'Upload' | 'Urgent' | 'User' | 'UserCircle' | 'Users' | 'Versions' | 'Video' | 'Viewfinder' | 'Vocabulary' | 'Volume' | 'Walk' | 'Wallpaper' | 'Wand' | 'Wash' | 'WaveSine' | 'Webhook' | 'Weight' | 'Wifi' | 'Window' | 'World' | 'Writing' | 'X'

import type { SizeInput } from '../../../node_modules/pruvious/dist/runtime/input-types'
export type { SizeInput }
