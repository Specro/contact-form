import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export function validateEmail(value, message) {
    const required = validateEmpty(value, 'This field is required');
    return required===''?(isEmail(value)?'':message):required;
}

export function validateEmpty(value, message) {
    return isEmpty(value)?message:'';
}