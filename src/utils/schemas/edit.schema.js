import * as Yup from 'yup';

export const editSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    dayOfBirth: Yup.number()
        .min(1, "Minimun day 1"),
    monthOfBirth: Yup.number()
        .min(1, "Minimun month 1"),
    yearOfBirth: Yup.number()
        .min(1930, "Minimun year is 1930"),
    timeOfBirth: Yup.string(),
});