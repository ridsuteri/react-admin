import * as React from "react"
import {
  Show,
  SimpleShowLayout,
  //   TextInput,
  //   DateInput,
  TextField,
  SimpleForm,
  SimpleFormView,
  RichTextField,
  DateField,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

const PostShow = (props) => {
  return (
    <Show title="View Posts" {...props}>
      <SimpleShowLayout>
        <TextField disabled source="id" />
        <TextField disabled source="firebaseid" />
        <TextField source="title" />
        <RichTextField source="body" />
        <DateField label="Publication date" source="publishedAt" defaultValue={new Date()} />
      </SimpleShowLayout>
    </Show>
  )
}

export default PostShow
