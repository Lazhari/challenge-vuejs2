import _ from 'underscore';
export default {
    name: 'app',
    mounted: function() {
        let match = _.chain(this.$route.matched).sortBy(n => n.path.length).last().value();
        this.activeLink = match.path;
    },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            activeLink: null,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
