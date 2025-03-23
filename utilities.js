<script>
function randomNameGenerator() {
const Names = ['Felix','Jordan','Sage','Jasper','Kira','Kai','Amber','Sora','Sarabi','Cairo']

return{
  name: 'Click the button to generate a name',
  generateName() {
    const Name = Names[Math.floor(Math.random() * Names.length)]
    this.name = `${Name};
  }
};
}
</script>