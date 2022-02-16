const Sequelize = require('sequelize');

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('tokens',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        token: {
            type: DataTypes.STRING(100),            
        },
        user_id: {
            type: DataTypes.STRING(100),
        },

    },{
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Tokens", // 테이블 이름 정의
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
})
