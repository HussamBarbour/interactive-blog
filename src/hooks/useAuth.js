import axios from 'axios';
import { useState } from 'react';

function useAuth() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    async function login(values) {
        try {
            setLoading(true);
            setError();
        } catch (err) {
            setLoading();
            setError(err);
        }
    }
    async function signUp(values) {
        try {
            setLoading(true);
            setError();
            console.log(values);
            const FormData = require('form-data');
            const form = new FormData();
            for (var key in values) {
                form.append(key, values[key]);
            }
            return await axios.post('https://interactive.hussamweb.com/wp-json/interactive/v1/create-user', form).then((res) => {
                setLoading();
                return res.data;
            }).catch((error) => {
                setLoading();
                return error.response.data;
            })
        } catch (err) {
            setLoading();
            setError(err);
        }
    }

    return { loading, error, login, signUp };
}

export { useAuth };