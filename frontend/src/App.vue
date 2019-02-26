<template>
    <div id="app">
        <mdb-container fluid class="mt-1">
            <mdb-row style="width:100%">
                <mdb-col sm="2" md="1" > <sidebar-menu :menu="menu" style="width:10%;"/></mdb-col>
                <mdb-col sm="2" md="11"> <router-view style="width:100%"/></mdb-col>
            </mdb-row>

        </mdb-container>
    </div>
</template>

<script>
console.log("teste");
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
    mdbDropdownToggle,

  },

  data()
  {

            return {
                msg: 'Index',
                menu: [
                    {
                        header: true,
                        title: 'Rock Content',
                        // component: componentName
                        // visibleOnCollapse: true
                    },
                    {
                        href: '/tasks',
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
                        href: '/content',
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
