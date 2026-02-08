import { test, expect } from '@playwright/test';

test('Pedido deve transitar de Criado para Pago', async ({ page }) => {
  // Abrir o sistema fake
  await page.goto('file://' + process.cwd() + '/index.html');

  // Verificar estado inicial
  const status = page.locator('#order-status');
  await expect(status).toHaveText('Estado do pedido: Criado');

  // Clicar em "Pagar"
  await page.click('#pay-button');

  // Verificar novo estado
  await expect(status).toHaveText('Estado do pedido: Pago');
}); 