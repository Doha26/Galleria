/* const Dimensions = {
    get: jest.fn().mockReturnValue({width: 100, height:100})
}
module.exports = Dimensions; */

const Dimensions = {
  get: jest.fn().mockReturnValue({width: 100, height: 100}),
};
export default Dimensions;
