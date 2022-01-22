import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  sideBar: {
    flex: 1,
    height: 'calc(100vh - 65px)',
    position: 'sticky',
  },
  sidebarWrapper: {
    padding: '50px 5%',
    height: '100%',
  },
  sidebarList: {
    listStyle: 'none',
    paddingLeft: '20%',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  sidebarListItem: {
    marginBottom: 11.5,
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bolder',
    },
    display: 'flex',
    minWidth: 70,
  },
  active: {
    fontWeight: 'bolder',
  },
}));

export default useStyles;
