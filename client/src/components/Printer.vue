<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
        <h1>3D Printer Control Panel</h1>
        <form>
          <div class="form-group row">
            <label for="systemCode" class="col-sm-2 col-form-label">System Code</label>
            <input
            id="systemCode"
            type="text"
            v-model="systemCode"
            class="form-control col-sm-10"
            placeholder="System Code"
            @change="store('systemCode', $event.target.value)"><br />
          </div>
          <div class="form-group row">
            <label for="unitCode" class="col-sm-2 col-form-label">Unit Code</label>
            <input
              id="unitCode"
              type="text"
              v-model="unitCode"
              class="form-control col-sm-10"
              placeholder="Unit Code"
              @change="store('unitCode', $event.target.value)"><br />
          </div>
        </form>

        <button class="btn btn-success" @click="printerSwitch(1)">On</button>
        <button class="btn btn-danger" @click="printerSwitch(0)">Off</button>
      </div>
    </div>
  </div>
</template>

<script>
import printer from '@/services/printer'

export default {
  name: 'Printer',
  data () {
    return {
      unitCode: 2,
      systemCode: '01011'
    }
  },
  mounted () {
    this.unitCode = localStorage.getItem('unitCode') || this.unitCode
    this.systemCode = localStorage.getItem('systemCode') || this.systemCode
  },
  methods: {
    store (setting, value) {
      localStorage.setItem(setting, value)
    },
    async printerSwitch (state) {
      try {
        const response = await printer.pswitch({
          unitCode: this.unitCode,
          systemCode: this.systemCode,
          state: state
        })
        console.log(response.data)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
