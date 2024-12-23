let site_domain = '';
let site_name = '';
let site_email = '';
let site_address = '';

function clearData() {
    site_domain = '';
    site_name = '';
    site_email = '';
    site_address = '';
}

function getData() {
    site_domain = document.getElementById('site_domain');
    site_name = document.getElementById('site_name');
    site_email = document.getElementById('site_email');
    site_address = document.getElementById('site_address');
}

function handleRenewalPolicy() {
    getData();
    if(site_domain.value.length === 0 || site_name.value.length === 0 || site_email.value.length === 0 || site_address.value.length === 0) {
        alert("Chưa nhập dữ liệu");
    } else {
        const renewal_policy = `<h1>At ${site_name.value}, we want to ensure your continued satisfaction with our services. Here is our Renewal Policy:</h1><p><strong>1. Automatic Renewal:</strong></p><p>Your ${site_name.value} subscription will automatically renew at the end of your chosen billing period (1 month, 3 months, or 1 year) unless you decide to cancel it.</p><p><strong>2. Renewal Notification:</strong></p><p>We will send you a renewal reminder before your subscription expires. This notification will include the renewal date and details about the upcoming charges.</p><p><strong>3. Payment Information:</strong></p><p>To avoid any interruptions in your service, please keep your payment information up-to-date. You can update your payment details in your ${site_name.value} account settings.</p><p><strong>4. Canceling Renewal:</strong></p><p>If you choose not to renew your subscription, you can cancel it at any time before the renewal date. You can do this through your ${site_name.value} account or by contacting our customer support team</p><p><strong>5. Upgrading or Downgrading:</strong></p><p>You have the flexibility to upgrade or downgrade your subscription plan at any time before the renewal date. Any plan changes will take effect upon the next renewal.</p>`;
        navigator.clipboard.writeText(renewal_policy)
            .then(() => {
                alert('Renewal Policy has been copied to clipboard.');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
        clearData();
    }
}

function handleRefundPolicy() {
    getData();
    if(site_domain.value.length === 0 || site_name.value.length === 0 || site_email.value.length === 0 || site_address.value.length === 0) {
        alert("Chưa nhập dữ liệu");
    } else {
        const refundPolicy = `<p>At ${site_name.value}, we stand by the quality of our service. Here is our Refund Policy:</p><p><b>1. Satisfaction Guarantee:</b><p><p>We offer a satisfaction guarantee for our 1-month and 3-month subscription plans. If, within the first 30 days of your subscription, you are not completely satisfied, please contact our customer support team, and we will issue a full refund.</p><p><b>2. Cancellation Refunds:</b></p><p>If you cancel your subscription before the renewal date and are eligible for a refund, we will process the refund based on your original payment method.</p><p><b>3. Processing Time:</b></p><p>Refunds typically take 5-10 business days to process, depending on your payment provider.</p><p><b>4. Annual Plan Refunds:</b></p><p>For our 1-year subscription plan, we do not offer refunds after the initial 30-day satisfaction guarantee period. Please note that this Refund Policy applies only to ${site_name.value} subscriptions purchased directly from our website. If you have any questions or require further assistance regarding renewals or refunds, please don't hesitate to reach out to our customer support team.</p>`;
        navigator.clipboard.writeText(refundPolicy)
            .then(() => {
                alert('Renewal Policy has been copied to clipboard.');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
        clearData();
    }
}