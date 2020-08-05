const isEmpty = require('./isEmpty')
const validator = require('validator')

module.exports = function validateAddProductInput(data) {
    const errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.ownerId = !isEmpty(data.ownerId) ? data.ownerId : ''
    //Validation for type
    data.description = !isEmpty(data.description) ? data.description : ''
    data.bidders = !isEmpty(data.bidders) ? data.bidders : []
    data.basePrice = !isEmpty(data.basePrice) ? data.basePrice : 0
    data.avialable = !isEmpty(data.avialable) ? data.avialable : false

    if (validator.isEmpty(data.name)) {
        errors.name = 'Product name is required'
    }

    if (validator.isEmpty(data.ownerId)) {
        errors.ownerId = 'Owner Id is required'
    }

    if (validator.isEmpty(data.basePrice)) {
        errors.ownerId = 'Base Price is required'
    }

    if (validator.isEmpty(data.avialable)) {
        errors.ownerId = 'Avialablility is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}