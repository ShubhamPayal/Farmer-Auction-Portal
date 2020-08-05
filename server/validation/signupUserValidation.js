const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function validateSignUpInput(data) {
    const errors = {}

    data.password    = !isEmpty(data.password) ? data.password : ''
    data.password2   = !isEmpty(data.password2) ? data.password2 : ''
    data.email       = !isEmpty(data.email) ? data.email : ''
    data.isBuyer     = !isEmpty(data.isBuyer) ? data.isBuyer : false
    data.isSeller    = !isEmpty(data.isSeller) ? data.isSeller : false 
    data.isCourier   = !isEmpty(data.isCourier) ? data.isCourier : false 

    if(validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }

    if(!validator.isEmail(data.email)) {
        errors.email = 'Not a valid email'
    }

    if(validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    if(!validator.isLength(data.password, {min:6, max:30})) {
        errors.password = 'Password must be atleast 6 characters'
    }

    if(!validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password does not match'
    }

    if(validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required'
    }


    if( (data.isBuyer == true && (data.isCourier == true || data.isSeller == true))
                                        ||
        (data.isSeller == true && (data.isCourier == true || data.isCourier == true)) 
                                        ||
        (data.isCourier == true && (data.isBuyer == true || data.isSeller == true))                                      
    ) {
        errors.usertype = 'User can be of only one type on one account'
    }

    if(data.isSeller == false && data.isBuyer == false && data.isCourier == false) {
        errors.usertype = 'User should be of one type'
    }

    return {errors, isValid: isEmpty(errors)}
}