<template>
    <div id="app">
        <mdb-container fluid class="mt-1">
            <mdb-row>
                <mdb-col sm="2" md="3"> <sidebar-menu :menu="menu" /></mdb-col>
                <mdb-col sm="2" md="9"> <router-view/></mdb-col>
            </mdb-row>
            
        </mdb-container>
    </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol,mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
  },
  data()
  {
        
            return {
                msg: 'Index',
                menu: [
                    {
                        header: false,
                        title: '',
                        // component: componentName
                        // visibleOnCollapse: true
                    },
                    {
                        href: '/teste',
                        title: 'Tasks',
                        icon: 'fa fa-tasks',
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        href: '/home',
                        title: 'Content',
                        icon: 'fa fa-file',
                        
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        href: '/setup',
                        title: 'Setup',
                        icon: 'fa fa-cog',
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    }
                ]
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>