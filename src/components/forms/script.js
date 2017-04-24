export default {
    name: 'users',
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [{
                    required: true,
                    message: 'Please input Activity name',
                    trigger: 'blur'
                }, {
                    min: 3,
                    max: 5,
                    message: 'Length should be 3 to 5',
                    trigger: 'blur'
                }],
                region: [{
                    required: true,
                    message: 'Please select Activity zone',
                    trigger: 'change'
                }],
                date1: [{
                    type: 'date',
                    required: true,
                    message: 'Please pick a date',
                    trigger: 'change'
                }],
                date2: [{
                    type: 'date',
                    required: true,
                    message: 'Please pick a time',
                    trigger: 'change'
                }],
                type: [{
                    type: 'array',
                    required: true,
                    message: 'Please select at least one activity type',
                    trigger: 'change'
                }],
                resource: [{
                    required: true,
                    message: 'Please select activity resource',
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: 'Please input activity form',
                    trigger: 'blur'
                }]
            },
            active: 0,
            center: true
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.active++ > 2) this.active = 0;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
