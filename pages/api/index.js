const writeCsvData = require('./csvUpdater');

module.exports = async (req, res) => {
    const { body } = req;
    const { id, word, deck } = body;
    try {
        console.log("try block :: ", body.id, id);
        const response = await writeCsvData({id, word, deck});
        console.log("success :: ", response);
        res.status(200).json({success: true});
    } catch (error) {
        console.log("catch block :: ", error);
        res.status(500).json({success: false, error: error});
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