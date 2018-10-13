<template>
    <div class="row container">
  	<section>
	<h2><span>Contact</span></h2> 
        <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input 
                type="text" 
                id="mail"
                class="validate"
                v-model="form.model"
                >
            <label for="mail">メールアドレス</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">title</i>
            <input   
                type="text" 
                class="validate"
                v-model="form.title"
                >
            <label for="first_name">タイトル</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">comment</i>
            <textarea  
                class="materialize-textarea"
                v-model="form.content"
                ></textarea>
            <label for="textarea1">内容</label>
        </div>
      <button type="submit" @click="onSubmit" class="waves-effect black btn">Submit</button>
      <button type="reset" @click="onReset" class="waves-effect black btn">Reset</button>
    </section>
  </div>
</template>

<script>
export default {
  name:"Contact",
  data () {
    return {
      form: {
        email: '',
        title: '',
        content:'',
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.postform(this.form);
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.title = '';
      this.form.content =  '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    postform(v){
      var form = document.createElement('form');
      var mail_r = document.createElement('input');
      var title_r = document.createElement('input');
      var content_r = document.createElement('input');
   
      form.method = 'POST';
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdScSitSpdVGNIGq1C7z56AWANOxj6bBHaS-99TacXK2QEH3Q/formResponse';
   
      mail_r.type = 'hidden'; //入力フォームが表示されないように
      mail_r.name = 'entry.2040554687';
      mail_r.value = v.email;

      title_r.type = 'hidden'; //入力フォームが表示されないように
      title_r.name = 'entry.787095462';
      title_r.value = v.title;

      content_r.type = 'hidden'; //入力フォームが表示されないように
      content_r.name = 'entry.1722078225';
      content_r.value = v.content;
   
      form.appendChild(mail_r);
      form.appendChild(title_r);
      form.appendChild(content_r);
      document.body.appendChild(form);
   
      form.submit();
    }
  }
}
</script>
<style lang="scss" scoped>
    container{
        text-aligen:center;
    }
</style>
