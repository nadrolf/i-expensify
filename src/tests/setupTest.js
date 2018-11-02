const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require('dotenv').config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});