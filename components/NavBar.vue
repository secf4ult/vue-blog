<template>
  <div>
    <b-navbar type="dark" variant="primary" toggleable="md">
      <b-navbar-brand to="/" tag="h1">
        TODO App
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/create">Create</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" type="submit" class="my-2 my-sm-0 mr-2"
              >Search</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown text="User" tabindex="-1">
            <b-dropdown-item>Login</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
