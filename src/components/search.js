import * as React from "react";
import { List, Datagrid,TextField,DateField, TextInput} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    //     <SelectInput optionText="name" />
    // </ReferenceInput>,
];

const SearchPost = (props) => (
    <List filters={postFilters }{...props}  >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="body" />
            {/* <TextField source="category" />
            <BooleanField source="commentable" /> */}
        </Datagrid>
    </List>
);

export default SearchPost;