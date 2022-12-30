import Assertor from '../utils/assertor';
import InstanceAssertor from '../utils/instance-assertor';
import InstanceValidator from '../utils/instance-validator';
import OptionalAssertor from '../utils/optional-assertor';
import OptionalValidator from '../utils/type-optional-validator';
import Validator from '../utils/type-validator';

const ccax = {
  ...Assertor,
  ...OptionalAssertor,
  ...InstanceAssertor,
  ...Validator,
  ...InstanceValidator,
  ...OptionalValidator,
};

// Export Assertors and Validators
export default ccax;
