// const ContectModel = require('../models/contect')
const ContectModel = require('../models/contect')
class ContectContoller {

    static contectinsert = async (req, res) => {
        try {
            // console.log(req.body)
            const { id } = req.userdata
            const { name, email, phone, message } = req.body
            if (!phone || !message) {
                req.flash("error", "All Fields are Required.");
                return res.redirect("/contect");
            }
            const result = new ContectModel({
                name: name,
                email: email,
                phone: phone,
                message: message,
                user_id: id
            })
            await result.save()
            req.flash('success', 'Thanks for contacting us. Please wait we will connect you soon!')
            res.redirect('/contect')
        } catch (error) {
            console.log(error)
        }
    }
    // static contectdisplay = async(req,res)=>{
    //     try {
    //         const {name,image,id}=req.userdata
    //         const contect = ContectModel.find({user_id:id}) 
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}
module.exports = ContectContoller