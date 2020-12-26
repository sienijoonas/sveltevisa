<footer>
  <div>
    <p>Work in Progress</p>
  </div>
  <div>
    <p>Made with Svelte</p>
    <div class="footer-image">
      <img src="favicon.png" alt="Svelte" />
    </div>
  </div>
</footer>

<style type="text/scss">
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #aab;
    color: #fff;

    p {
      margin: 0;
      padding: 0;
      text-shadow: 1px 1px 1px #0001;
      font-size: 0.8em;
    }

    div {
      display: flex;
      max-height: 16px;

      .footer-image {
        width: 16px;
        padding-left: 8px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

  @media (max-width: 560px) {
    footer {
      display: none;
    }
  }
</style>
