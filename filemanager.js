const fs=require('fs')

const fileName='./test.txt'

console.log('Creating File...')

fs.writeFile(fileName,'Hello Node.js',(err)=>{
    if(err){
        console.log('error creating file',err)
        return
    }
    console.log('File Created')

    fs.readFile(fileName,'utf-8',(err,data)=>{
        if(err){
            console.log('error reading file',err)
            return
        }
        console.log('Reading File')
        console.log(data)

        fs.appendFile(fileName,'\nLearning FS Module',(err)=>{
            if(err){
                console.log('error updating file',err)
                return
            }
            console.log('File Updated')

            fs.readFile(fileName,'utf-8',(err,data)=>{
                if(err){
                    console.log('error reading file',err)
                    return
                }
                console.log(data)

                fs.unlink(fileName,(err)=>{
                    if(err){
                        console.log('error deleting file',err)
                        return
                    }
                    console.log('File Deleted')
                })
            })
        })
    })
})