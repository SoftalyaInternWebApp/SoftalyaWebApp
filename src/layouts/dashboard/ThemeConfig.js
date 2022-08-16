// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const ThemeConfig = [
    {
        icon: getIcon('akar-icons:arrow-back'),
    }
];

export default ThemeConfig;
