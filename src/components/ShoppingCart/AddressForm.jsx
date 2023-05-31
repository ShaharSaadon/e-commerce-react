import React from 'react';
import { useForm } from 'react-hook-form';
import CountrySelect from '../CountrySelect'
export function AddressForm({ onNext, onAddressComplete }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        onAddressComplete(data);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Full Name:
                <input {...register("fullName", { required: true })} />
                {errors.fullName && <p>This field is required</p>}
            </label>

            <label>
                Street:
                <input {...register("street", { required: true })} />
                {errors.street && <p>This field is required</p>}
            </label>

            <label>
                City:
                <input {...register("city", { required: true })} />
                {errors.city && <p>This field is required</p>}
            </label>

            <label>
                State:
                <input {...register("state", { required: true })} />
                {errors.state && <p>This field is required</p>}
            </label>

            <label>
                Zip Code:
                <input {...register("zip", { required: true })} />
                {errors.zip && <p>This field is required</p>}
            </label>

            <label>
                Country:
                <input {...register("country", { required: true })} />
                {errors.country && <p>This field is required</p>}
            </label>

            <CountrySelect />

            <input type="submit" />
        </form>
    );
}