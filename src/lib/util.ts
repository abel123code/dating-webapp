import { differenceInYears } from 'date-fns';
import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { ZodIssue } from 'zod';

export function calculateAge(dob: Date) {
    return differenceInYears(new Date(), dob);
}

export function handleFormServerErrors<TFieldValues extends FieldValues>(
    errorResponse: { error: string | ZodIssue[] },
    setError: UseFormSetError<TFieldValues>
) {
    if (Array.isArray(errorResponse.error)) {
        errorResponse.error.forEach((e) => {
            const fieldName = e.path.join('.') as Path<TFieldValues>
            setError(fieldName, { message: e.message })
        })
    } else {
        setError('root.serverError', { message: errorResponse.error });
    }
}

//TFieldValues: This is a generic type placeholder, like a "variable" for types. It means, "I don’t know what the type is yet, but I’ll figure it out when the function is used."
// extends FieldValues: This ensures that TFieldValues must be a specific kind of type that matches the shape of FieldValues.