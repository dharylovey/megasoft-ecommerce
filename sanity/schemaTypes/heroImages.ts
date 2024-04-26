import { title } from "process";

export default {
    name: 'heroImage',
    type: 'document',
    title: 'Two Hero Images',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Hero Image',
        },
        {
            name: 'image1',
            type: 'image',
            title: 'First Image',
        },
        {
            name: 'image2',
            type: 'image',
            title: 'Second Image',
        },
    ],
}