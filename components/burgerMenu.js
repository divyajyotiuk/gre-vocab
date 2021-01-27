import { slide as Menu } from "react-burger-menu"
import Link from 'next/link'

export default props => {
  const pagesArray = props.pages;
  return (
    // Pass on our props
    <Menu {...props}>
      {pagesArray.map((pageData, index)=>{
        const pageName = pageData?.params?.id
        const pageLink = `/csvs/${pageName}`
        const id = `${pageName}-csvs-${index}`
        return (
        <Link key={id} className="menu-item" href={pageLink}>
          {pageName}
        </Link>
        );
      })}
    </Menu>
  );
};
