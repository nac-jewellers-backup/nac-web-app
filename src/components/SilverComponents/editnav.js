<Grid
container
id="headerContainer"
style={{ marginTop: "15px" }}
>
{/* <Container maxWidth="lg"> */}
<Grid container item xs={12} >
  <Grid item xs={11} className={classes.menunac}>
    <Grid
      container
      spacing={12}
      // id="fullcontainer"
      className="setHeight"
      style={{ height: "40px" }}
    >
      {/*  <Grid item xs={3} className="logoImgHeader1">
      <div
        id="logoDiv1"
        className="logoDiv1"
        onClick={() => {
          window.location.href = "/";
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          id="logoImage"
          style={{ transition: "height 0.2s" }}
          className={`imges`}
          src={styloriLogo}
          onLoad={() => this.setState({ load: true })}
          onLoadedData={() => this.setState({ load: false })}
          alt=""
        />
      </div>
    </Grid> */}
      <Grid
        container
        item
        xs={12}
        id={"containerTitle"}
        justify="flex-end"
        alignItems="center"
        className={`header-navbar-list1 ${classes.headerNavbarList}`}
        style={{marginLeft:"10px"}}
        onMouseLeave={() => {
          this.setState({
            Menuopen: false,
            Checked: false,
            targetopen: null,
          });
        }}
      >
        <Grid
          item
          xs={12}
          className="titleTop"
          id={"titleTop"}
        >
          <nav>
            {menuListHeader.map((listName) => {
              let urlsmall = listName.title.toLowerCase();
              return (
                <a
                  href={listName.url}
                  className={
                    window.location.pathname === listName.url
                      ? classes.seletectedMenu
                      : classes.menuListCursor
                  }
                  onMouseOver={(event) => {
                    this.setState({
                      Menuopen: true,
                      submenuOpen: true,
                      subTitleData: null,
                      targetopen: event.currentTarget,
                      listHoverItem: listName.title.replace(
                        / +/g,
                        ""
                      ),
                    });
                  }}
                >
                  {listName.title}
                </a>
              );
            })}
          </nav>
          {/* {this.state.Menuopen &&
        menuLists[this.state.listHoverItem] ? (
          <HeaderHoverMenuItem
            tabdata={this.props.data}
            listHoverItem={
              menuLists[this.state.listHoverItem]
            }
            onMouseOver={(event) => {
              this.setState({
                Menuopen: true,
                targetopenSubmenu: event.currentTarget,
              });
            }}
            opened={this.state.Menuopen}
            targetopened={this.state.targetopen}
            submenuDetails={this.submenuDetails}
            onMouseLeave={() => {
              this.setState({ targetopen: null });
            }}
          />
        ) : (
          ""
        )} */}
          {[
            "DIAMOND",
            "SILVER",
            "PURCHASEPLANS",
            "COLLECTIONS",
          ].indexOf(this.state.listHoverItem) === -1 &&
          this.state.Menuopen ? (
            <HeaderHoversubMenu
              opened={this.state.Menuopen}
              // onMouseOver={(event) => {
              //   this.setState({ submenuOpen: true });
              // }}
              listHoverItem={
                menuLists[this.state.listHoverItem]
              }
              listitem={this.state.listHoverItem}
              data={this.state.subTitleData}
              subMenuTarget={this.subMenuTarget}
              targetopened={this.state.targetopen}
              onMouseLeave={() => {
                this.setState({
                  submenuOpen: false,
                  Menuopen: false,
                  subTitleData: "",
                  subMenuTarget: "",
                  targetopen: "",
                });
              }}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={1} lg={1} md={1} xl={1} className={classes.menustylori}>
    <a
      href="https://www.stylori.com/"
      style={{ textDecoration: "none", color : "#fff" }}
    >
      STYLORI
    </a>
  </Grid>
</Grid>
{/* </Container> */}
</Grid>