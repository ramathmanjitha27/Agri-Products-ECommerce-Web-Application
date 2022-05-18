const router = require("express").Router();
let NewItem = require("../models/itemModel");


router.route("/add").post( (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    const newItem = new NewItem({
        title,
        description,
        price
    })

    newItem.save().then( () => {
        res.json("New Item Added")
    }).catch( (err)=> {
        console.log(err);
    })
})


router.route("/").get( (req,res)=>{
    NewItem.find().then((newitems)=>{
        res.json(newitems)
    }).catch( (err)=> {
        console.log(err)
    })
})


// router.route("/update/:id").put(async (req,res) =>{
//     let userId = req.params.id;
//     const{parcel_No, cus_name, cus_address, cus_mobile, date, province, vh_no, delivered_date,note, status} =req.body;
//
//     const updateOrder = {
//         date,
//         cus_name,
//         cus_address,
//     }
//
//     const update = await NewOrder.findByIdAndUpdate(userId, updateOrder).then(()=>{
//
//         res.status(200).send({status: "Order Updated"})
//
//     }).catch( (err)=> {
//         console.log(err);
//         res.status(500).send({status: "Error with update data", error: err.message});
//     })
// })
//
//
// router.route("/delete/:id").delete(async (req,res) =>{
//
//     let userId = req.params.id;
//
//     await NewOrder.findByIdAndDelete(userId).then( ()=>{
//         res.status(200).send({status: "Order Deleted"});
//     }).catch( (err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with delete Driver", error: err.message});
//     })
// })
//
//
// router.route("/get/:id").get(async (req,res)=>{
//     let userId = req.params.id;
//
//     const user = await NewOrder.findById(userId).then((neworders)=>{
//         res.status(200).send({status: "Order fetched", neworders})
//     }).catch( (err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with get user", error: err.message })
//     })
// })

module.exports = router;