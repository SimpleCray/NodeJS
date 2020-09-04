module.exports.postCreate = (req, res, next) =>{
    var errors = []
    if(!req.body.email) errors.push('Please enter email !')
    if(!req.body.password) errors.push('Please enter password !')
    if(!req.body.confirmPassword) errors.push('Please enter password confirm !')
    if(!(req.body.password == req.body.confirmPassword)) errors.push("Password confirm doesn't match !")
    if(!req.body.phone) errors.push('Please enter phone !')
    if (errors.length){
        res.render("users/create",{
           errors: errors,
           values: req.body
        })
        return;
    }
    next()
}
