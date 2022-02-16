'use strict';
module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        pw: {
            type: DataTypes.STRING(100),            
        },
        name: {
            type: DataTypes.STRING(100),
        },
    }, {
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Users", // 테이블 이름 정의
        timestamps: true, // createAt, updateAt 활성화
        paranoid: true, // deleteAt 옵션
    });

    return Users;
};