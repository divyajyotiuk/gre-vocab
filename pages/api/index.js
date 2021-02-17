const writeCsvData = require('./csvUpdater');

module.exports = async (req, res) => {
    const {id, word, deck} = req.body;
    try {
        console.log("try block :: ", id);
        const response = await writeCsvData({id, word, deck});
        console.log("success :: ", response);
        res.status(200).send({success: true});
    } catch (error) {
        console.log("catch block :: ", error);
        res.status(500).send({success: false, error: error});
    }
}

// (async () => {
//     try {
//         const res = await writeCsvData({id: 'VocabET1', word:'benign', deck:'3'})
//         console.log("success");
//     } catch (error) {
//         console.log("error",error)
//         process.exit(-1);
//     }
//     process.exit();
// })();