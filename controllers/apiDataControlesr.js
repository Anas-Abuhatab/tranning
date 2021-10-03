'usr strict';

const { default: axios } = require("axios");
const { ApiData } = require("../Modles/apiDataModle");
const { userModle } = require("./fruitModle");

const getApiData = async (req, res) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    await axios.get(url).then((data) => {
        let allData = data.data.drinks.map(item => {
            return new ApiData(item);
        });
        res.json(allData)
    });
};

const getFaruitData = async (req, res) => {
    userModle.find().then(data => {
        res.status(200).json(data);
    });
};

const createFaruitData = async (req, res) => {
    let addData = req.body;
    let newFru = new userModle(addData)
    newFru.save();
    await userModle.find().then(data => {
        res.json(data);
    });
};

const deleteFaruitData = async (req, res) => {
    let deleteiD = req.params.id;
    userModle.findByIdAndDelete(deleteiD).then(data => {
        userModle.find().then(data => {
            res.json(data);
        });
    });

};

const updateFaruitData = async (req, res) => {
    let deleteiD = req.params.id;
    let addData = req.body;
    userModle.findOne({ _id: deleteiD }).then(data => {
        data.strDrink = addData.strDrink;
        data.strDrinkThumb = addData.strDrinkThumb;
        data.idDrink = addData.idDrink;
        data.save()
    });
    await userModle.find().then(data => {
        res.status(200).json(data);
    });
};




module.exports = {
    getApiData,
    getFaruitData,
    createFaruitData,
    deleteFaruitData,
    updateFaruitData
};