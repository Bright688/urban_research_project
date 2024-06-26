# Generated by Django 5.0.6 on 2024-05-24 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='details',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='service_id',
            new_name='service',
        ),
        migrations.AddField(
            model_name='order',
            name='payment_type',
            field=models.CharField(choices=[('credit_card', 'Credit Card'), ('paypal', 'PayPal'), ('bank_transfer', 'Bank Transfer')], default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
