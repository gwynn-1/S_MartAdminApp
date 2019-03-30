const updateRule = {
    Name:{
        presence: {
            message: 'Hãy nhập Họ và Tên',
            allowEmpty: false
        },
        length: {
            minimum: 4,
            maximum :26,
            tooLong:"Họ và Tên không được quá %{count} từ",
            tooShort:"Họ và Tên không được ít hơn %{count} từ"
        },
    },
    Email:{
        presence: {
            message: 'Hãy nhập Email',
            allowEmpty: false
        },
        email: {
            message: "Email không hợp lệ"
        },
        length: {
            minimum: 4,
            maximum :100,
            tooLong:"Email không được quá %{count} từ",
            tooShort:"Email không được ít hơn %{count} từ"
        }
    },
    Phone:{
        presence: {
            message: 'Hãy nhập số điện thoại',
            allowEmpty: false
        },
        
        numericality: {
            onlyInteger: true,
            message: "Số điện thoại phải là số"
        },
        length: {
            minimum: 10,
            maximum :11,
            tooLong:"Số điện thoại không được quá %{count} từ",
            tooShort:"Số điện thoại không được ít hơn %{count} từ"
        }
    }
}