import { createAction } from "@reduxjs/toolkit";

export default {
    Destination: {
        Select: createAction('destination/select'),
    },
    BookDates: {
        Select: createAction('bookDates/select'),
    },
    Rooms: {
        Add: createAction('rooms/add'),
        Save: createAction('rooms/save'),
    }
};
