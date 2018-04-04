<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <app-header></app-header>
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<navbar></navbar>
			<tags-view></tags-view>
			<app-main></app-main>
		</div>
    <app-footer></app-footer>
	</div>
</template>

<script>
import { AppHeader, Navbar, Sidebar, AppMain, TagsView, AppFooter } from './components/index'

export default {
  name: 'layout',
  components: {
    AppHeader,
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    AppFooter
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>
