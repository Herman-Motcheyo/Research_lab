<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="section">
          <img :src="logo" alt="Logo" class="logo" />
          <p>Structural Processing Property</p>
        </div>
        <div class="section">
          <h3>Address</h3>
          <p>Materials Science Center</p>
          <p>Local Materials Promotion Authority, Nkolbisson</p>
          <p>POBox: 2393, Yaoundé</p>
          <p>Cameroon</p>
        </div>
        <div class="section">
          <h3>Contact Information</h3>
          <p>Call: +237</p>
          <p>Fax: +237</p>
          <p>Lab Tel No: +237</p>
          <p>Email: <a href="mailto:kamseuelie2001@yahoo.fr">kamseuelie2001@yahoo.fr</a></p>
          <p><a href="#" class="link">Researcher ID</a></p>
          <p><a href="#" class="link">ORCID ID</a></p>
        </div>
        <div class="section">
          <h3>Publications Statistics</h3>
          <p>** Publications</p>
          <p>7000 Citation Counts</p>
          <p>22 Research Members</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright© 2024 - Tchenegnon Motcheyo Herman</p>
      </div>
    </footer>
  </template>
  

<script setup>


</script>

 <style scoped>
.footer {
  background: #f9fafc;
  color: #333;
  padding: 20px 40px;
  font-family: Arial, sans-serif;
  border-top: 1px solid #ddd;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.section {
  flex: 1;
  min-width: 200px;
}

.section h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.section p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.logo {
  width: 100px;
  margin-bottom: 10px;
}

.link {
  color: #007acc;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
  color: #666;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}
</style>