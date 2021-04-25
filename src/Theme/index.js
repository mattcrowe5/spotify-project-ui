import { createMuiTheme } from '@material-ui/core/styles';
import { defaultStyles, overrides } from './defaults';

const theme = createMuiTheme({ ...defaultStyles, ...overrides });

export default theme;
