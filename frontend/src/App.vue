<template>
    <div>
        <mdb-container fluid class="mt-5">
            <mdb-row>
            <mdb-col sm="2" offset-md="2"> <sidebar-menu :menu="menu" /></mdb-col>
            <mdb-col sm="4"> <router-view/></mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'App',

  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  },
  data()
  {
            return {
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
                        href: '/teste',
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
                        href: '/teste',
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

</style>
