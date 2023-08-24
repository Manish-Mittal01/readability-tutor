import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { ScrollBar } from "components/ui";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNav } from "store/theme/themeSlice";
import PropTypes from "prop-types";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_MODE_DARK,
  NAV_MODE_THEMED,
  NAV_MODE_TRANSPARENT,
  SIDE_NAV_CONTENT_GUTTER,
  LOGO_X_GUTTER,
} from "constants/theme.constant";
import Logo from "components/template/Logo";

import navigationConfig from "configs/navigation.config";
import { appsNavigationConfig2 } from "configs/navigation.config/apps.navigation.config";
import { appsNavigationConfig3 } from "configs/navigation.config/apps.navigation.config";
import VerticalMenuContent from "components/template/VerticalMenuContent";
import useResponsive from "utils/hooks/useResponsive";

const sideNavStyle = {
  width: SIDE_NAV_WIDTH,
  minWidth: SIDE_NAV_WIDTH,
};

const sideNavCollapseStyle = {
  width: SIDE_NAV_COLLAPSED_WIDTH,
  minWidth: SIDE_NAV_COLLAPSED_WIDTH,
};

const SideNav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    //console.log('pathss',location.pathname);
    dispatch(setActiveNav(location?.pathname));

    // loadDataOnlyOnce();
  }, [location.pathname]);

  const themeColor = useSelector((state) => state.theme.themeColor);
  const primaryColorLevel = useSelector(
    (state) => state.theme.primaryColorLevel
  );
  const navMode = useSelector((state) => state.theme.navMode);
  const mode = useSelector((state) => state.theme.mode);
  const direction = useSelector((state) => state.theme.direction);
  const currentRouteKey = useSelector(
    (state) => state.base.common.currentRouteKey
  );
  const sideNavCollapse = useSelector(
    (state) => state.theme.layout.sideNavCollapse
  );
  const userAuthority = useSelector((state) => state.auth.user.authority);

  const { larger } = useResponsive();

  const sideNavColor = () => {
    if (navMode === NAV_MODE_THEMED) {
      return `bg-${themeColor}-${primaryColorLevel} side-nav-${navMode}`;
    }
    return `side-nav-${navMode}`;
  };

  const logoMode = () => {
    if (navMode === NAV_MODE_THEMED) {
      return NAV_MODE_DARK;
    }

    if (navMode === NAV_MODE_TRANSPARENT) {
      return mode;
    }

    return navMode;
  };
  const { authority } = useSelector((state) => state?.auth?.user);
  //console.log(authority);
  let navData = [];
  //console.log(userRole,'userole');
  if (authority.indexOf("admin") > -1) {
    //console.log('admin login')
    navData = navigationConfig;

    // execution block
  } else if (authority.indexOf("user") > -1) {
    // console.log('institute login')
    navData = appsNavigationConfig2;
    // execution block
  } else if (authority.indexOf("teacher") > -1) {
    console.log("teacher login");
    navData = appsNavigationConfig3;
    // execution block
  } else {
    navData = appsNavigationConfig2;
  }

  //console.log(navigationConfig,'first menu');

  //console.log(appsNavigationConfig2,'second menu');
  const menuContent = (
    <VerticalMenuContent
      navMode={navMode}
      collapsed={sideNavCollapse}
      navigationTree={navData}
      routeKey={currentRouteKey}
      userAuthority={userAuthority}
      direction={direction}
    />
  );

  return (
    <>
      {larger.md && (
        <div
          style={sideNavCollapse ? sideNavCollapseStyle : sideNavStyle}
          className={classNames(
            "side-nav",
            sideNavColor(),
            !sideNavCollapse && "side-nav-expand"
          )}
        >
          <div className="side-nav-header">
            <Logo
              mode={logoMode()}
              type={sideNavCollapse ? "streamline" : "full"}
              gutter={sideNavCollapse ? SIDE_NAV_CONTENT_GUTTER : LOGO_X_GUTTER}
            />
          </div>
          {sideNavCollapse ? (
            menuContent
          ) : (
            <div className="side-nav-content menuitems-ct">
              <ScrollBar autoHide direction={direction}>
                {menuContent}
              </ScrollBar>
            </div>
          )}
        </div>
      )}
    </>
  );
};

SideNav.propTypes = {
  themed: PropTypes.bool,
  darkMode: PropTypes.bool,
  themeColor: PropTypes.string,
};

SideNav.defaultProps = {
  themed: false,
  darkMode: false,
  themeColor: "",
};

export default SideNav;
