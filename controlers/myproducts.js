const data = require("../data.json")
const model = require("../schema/schema")

const myProducts = async(req,res) =>{
        const datas = await model.find(req.query);
        console.log(req.query);
        res.send(datas);
}
const mySpecialProducts = async (req,res) =>{
        console.log("helo ji");
        const docs = await model.find({})
        console.log(docs);
        res.json({"myDatas":docs});
}

module.exports = {myProducts,mySpecialProducts};  