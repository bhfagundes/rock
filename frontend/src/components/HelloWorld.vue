<template>

  <mdb-container fluid class="mt-3">
            <mdb-row>
                <mdb-col md="4"></mdb-col>
                <mdb-col md="6"> <h3>{{ msg }}</h3></mdb-col>
                <mdb-col md="2">
                    <mdb-dropdown tag="li">
                        <mdb-dropdown-toggle slot="toggle" tag="a" navLink  waves-fixed>Olá,</mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                        <mdb-dropdown-item>Action</mdb-dropdown-item>
                        <mdb-dropdown-item>Another action</mdb-dropdown-item>
                        <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-col>
            </mdb-row>
  </mdb-container>
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
                msg: 'Setupsda',
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
