const loginRule = {
  email: {
    presence: {
      message: 'Hãy nhập Email đăng nhập',
      allowEmpty: false,
    },
    email: {
      message: "Email không hợp lệ"
    },
    length: {
      minimum: 4,
      maximum: 50,
      tooLong: "Email đăng nhập không được quá %{count} từ",
      tooShort: "Email đăng nhập không được ít hơn %{count} từ"
    }
  },

  password: {
    presence: {
      message: 'Hãy nhập Mật khẩu',
      allowEmpty: false
    },
    length: {
      minimum: 4,
      maximum: 16,
      tooLong: "Password không được quá %{count} từ",
      tooShort: "Password không được ít hơn %{count} từ"
    }
  }
}

export default loginRule;