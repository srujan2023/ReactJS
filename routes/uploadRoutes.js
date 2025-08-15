const express = require('express')
const router = express.Router();
const multer = require('multer') //multer na install madi define madabeku ella adare error baruthe
const path = require('path')  //path na define madabeku ella adare error baruthe

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,path.join(__dirname,'../uploads'));
    },
    filename(req,file,cb){
        cb(
            null,
                `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
           );
    }
})


const upload = multer({storage:storage});

router.post('/',upload.single('image'),(req,res)=>{
    res.json({image:req.file.filename})
});

module.exports = router;